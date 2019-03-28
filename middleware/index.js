function onSignIn(user) {
    var profile = user.getBasicProfile();
    $('#profile .name').text(profile.getName());
    $('#profile .email').text(profile.getEmail());
}