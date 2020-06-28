export const checkBudget = (tot, dif) => {
    let alert;

    if ((tot / 4) > dif) {
        alert = "alert alert-danger";
    } else if ((tot / 2) > dif) {
        alert = "alert alert-warning";
    } else {
        alert = "alert alert-success";
    }
    return alert;
}