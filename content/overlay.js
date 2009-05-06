var openProfileFolder = {
  open: function () {
    var prefs = openProfileFolderPrefs;

    var prefUseCustomApplication = nsPreferences.getBoolPref(prefs.USE_CUSTOM_APPLICATION_KEY, prefs.USE_CUSTOM_APPLICATION_DEFAULT);

    var directoryService = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties);
    var profileFolder = directoryService.get("ProfD", Components.interfaces.nsIFile);

    if (prefUseCustomApplication) {
      var prefCustomApplicationPath      = nsPreferences.copyUnicharPref(prefs.CUSTOM_APPLICATION_PATH_KEY, prefs.CUSTOM_APPLICATION_PATH_DEFAULT);
      var prefCustomApplicationArguments = nsPreferences.copyUnicharPref(prefs.CUSTOM_APPLICATION_ARGUMENTS_KEY, prefs.CUSTOM_APPLICATION_ARGUMENTS_DEFAULT);

      var path = Components.classes["@mozilla.org/file/local;1"].getService(Components.interfaces.nsILocalFile);
      path.initWithPath(prefCustomApplicationPath);

      var args = [];
      prefCustomApplicationArguments.split(" ").forEach(function (s) {
        if (s) args.push(s);
      });
      args.push(profileFolder.path);

      var process = Components.classes["@mozilla.org/process/util;1"].getService(Components.interfaces.nsIProcess);
      process.init(path);
      process.run(false, args, args.length);
    } else {
      var fileLocal = Components.classes["@mozilla.org/file/local;1"].getService(Components.interfaces.nsILocalFile);
      fileLocal.initWithPath(profileFolder.path);
      fileLocal.launch();
    }
  }
};
