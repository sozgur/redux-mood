const INITIAL_FACE = { face: "^_^" };
const faceReducer = (state = INITIAL_FACE, action) => {
    switch (action.type) {
        case "HAPPY":
            return { ...state, face: "ʘ‿ʘ" };
        case "SAD":
            return { ...state, face: "⊙︿⊙" };
        case "ANGRY":
            return { ...state, face: "ಠ_ಠ" };
        case "CONFUSED":
            return { ...state, face: "ↂ_ↂ" };
        default:
            return state;
    }
};

const store = Redux.createStore(faceReducer);
