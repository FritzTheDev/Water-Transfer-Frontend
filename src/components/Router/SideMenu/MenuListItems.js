import React, { useContext } from "react";
import { IonItem, IonLabel, IonIcon } from "@ionic/react";

import { menuRoutes } from "../../../constants/menuData";
import { history } from "../../../data/history";
import AuthContext from "../../../data/AuthContext";

export const MenuListItems = () => {
    const auth = useContext(AuthContext);
    console.log(auth);
    
    let items;
    if (auth.user) {
        items = menuRoutes["loggedInPages"].map(({ title, path, icon }) => {
            return (
                <IonItem key={title} onClick={() => history.push(path)}>
                    <IonLabel>{title}</IonLabel>
                    <IonIcon icon={icon} slot="start" />
                </IonItem>
            )
        });
    } else {
        items = menuRoutes["loggedOutPages"].map(({ title, path, icon }) => {
            return (
                <IonItem key={title} onClick={() => history.push(path)}>
                    <IonLabel>{title}</IonLabel>
                </IonItem>
            )
        });
    }
    return items;
}