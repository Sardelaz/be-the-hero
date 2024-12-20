import React from "react";
import { StyleSheet, NativeModules } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#f0f0f5",
    },

    header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },

    headerText: {
    fontSize: 15,
    color: "#737380",
    },

    headerTextBold: {
    fontWeight: "bold",
    },

    title: {
    fontSize: 30,
    marginBottom: 16,
    marginBottom: 16,
    color: "#13131a",
    fontWeight: "bold",
    },

    description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
    },

    incidentList: {
    marginTop: 32,
    },

    incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    },

    incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
    },

    incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
    },

    detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },

    detailsButtonText: {
    color: "#e02041",
    fontSize: 20,
    fontWeight: "bold",
    },

    actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    },

    action: {
    flex: 2,
    alignItems: "center",
    },

    floatingButton: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,

    borderRadius: 30,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    },
})