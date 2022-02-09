const mood = $(".mood");

$("#happy").click(function () {
    store.dispatch({ type: "HAPPY" });
});

$("#sad").click(function () {
    store.dispatch({ type: "SAD" });
});

$("#angry").click(function () {
    store.dispatch({ type: "ANGRY" });
});

$("#confused").click(function () {
    store.dispatch({ type: "CONFUSED" });
});

function renderFace() {
    mood.text(store.getState().face);
}

renderFace();
store.subscribe(renderFace);
