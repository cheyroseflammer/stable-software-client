import React from "react";

export default React.createContext({
  horses: [],
  riders: [],
  addRider: () => {},
  addHorse: () => {},
  deleteHorse: () => {},
  updateHorse: () => {},
});
