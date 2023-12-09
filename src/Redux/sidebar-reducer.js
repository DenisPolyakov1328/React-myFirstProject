const initialState = {
        friendsData: [
          { id: "1", name: "Дарья" },
          { id: "2", name: "Буся" },
          { id: "3", name: "Анастасия" },
        ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;