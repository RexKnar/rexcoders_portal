var callOne = true;
function call() {
    if (callOne) openNav();
    else closeNav();
    callOne = !callOne;
}
