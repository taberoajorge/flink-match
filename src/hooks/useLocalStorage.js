/* eslint-disable no-undef */
import React from "react";
import axios from "axios";

const URL_API = "https://flink-web-test.herokuapp.com/";

function useLocalStorage(itemName) {
  const [item, setItem] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [likedPerson, setLikedPerson] = React.useState([]);

  React.useEffect( async () => {
    const localStorageItem = localStorage.getItem(itemName);
    const DataUser = JSON.parse(localStorage.getItem("DATA_V1"));
    let preferences;

    if (DataUser) {
      if (DataUser[0].preferences === "girls") {
        preferences = "api/v1/getWaifus";
      } else {
        preferences = "api/v1/getHusbandos";
      }
    }

    let parsedItem;

    await axios.get(`${URL_API}${preferences}`).then((response) => {
      const users = response.data;
      // console.log(users);
      let extraProps;

      if (users.waifus) {
        extraProps = users.waifus.map((object, index) => ({
          ...object,
          likedPerson: false,
          superLikedPerson: false,
          dislikedPerson: false,
          id: index,
        }));
      } else {
        extraProps = users.husbandos.map((object, index) => ({
          ...object,
          likedPerson: false,
          superLikedPerson: false,
          dislikedPerson: false,
          id: index,
        }));
      }

      setData(extraProps);
      if (!localStorageItem) {
        localStorage.setItem("USERS_V1", JSON.stringify(extraProps));
        parsedItem = data;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
    });
  }, []);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  const saveReaction = (itemName, newItem) => {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    let newData = [newItem];

    if (!localStorageItem) {
      const stringifiedItem = JSON.stringify(newData);
      localStorage.setItem(itemName, stringifiedItem);
    } else {
      parsedItem = JSON.parse(localStorageItem);
      newData = [...parsedItem, newItem];
      const stringifiedItem = JSON.stringify(newData);
      localStorage.setItem(itemName, stringifiedItem);
    }
  };

  const getLikeds = () => {
    let parsedItem;
    const localStorageItem = localStorage.getItem("LIKED_USERS_v1");
    parsedItem = JSON.parse(localStorageItem);
    console.log(parsedItem);
    setLikedPerson(parsedItem);
  };

  return {
    getLikeds,
    likedPerson,
    saveReaction,
    item,
    saveItem,
    data,
  };
}

export default useLocalStorage;
