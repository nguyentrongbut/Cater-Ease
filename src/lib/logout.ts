const logout = () => {
    localStorage.removeItem("userInfo")
    // Trigger event
    window.dispatchEvent(new Event("userInfoChanged"))
}

export default logout;