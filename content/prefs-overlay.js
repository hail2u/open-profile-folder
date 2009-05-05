var openProfileFolderPrefs = {
  USE_CUSTOM_APPLICATION_KEY:           "extensions.open-profile-folder.use_custom_application",
  USE_CUSTOM_APPLICATION_DEFAULT:       false,
  CUSTOM_APPLICATION_PATH_KEY:          "extensions.open-profile-folder.custom_application_path",
  CUSTOM_APPLICATION_PATH_DEFAULT:      "",
  CUSTOM_APPLICATION_ARGUMENTS_KEY:     "extensions.open-profile-folder.custom_application_arguments",
  CUSTOM_APPLICATION_ARGUMENTS_DEFAULT: "",

  loadPrefs: function() {
    var prefUseCustomApplication       = nsPreferences.getBoolPref(this.USE_CUSTOM_APPLICATION_KEY, this.USE_CUSTOM_APPLICATION_DEFAULT);
    var prefCustomApplicationPath      = nsPreferences.copyUnicharPref(this.CUSTOM_APPLICATION_PATH_KEY, this.CUSTOM_APPLICATION_PATH_DEFAULT);
    var prefCustomApplicationArguments = nsPreferences.copyUnicharPref(this.CUSTOM_APPLICATION_ARGUMENTS_KEY, this.CUSTOM_APPLICATION_ARGUMENTS_DEFAULT);
    document.getElementById("prefUseCustomApplication").checked     = prefUseCustomApplication;
    document.getElementById("prefCustomApplicationPath").value      = prefCustomApplicationPath;
    document.getElementById("prefCustomApplicationArguments").value = prefCustomApplicationArguments;
  },

  savePrefs: function() {
    var prefUseCustomApplication       = document.getElementById("prefUseCustomApplication").checked;
    var prefCustomApplicationPath      = document.getElementById("prefCustomApplicationPath").value;
    var prefCustomApplicationArguments = document.getElementById("prefCustomApplicationArguments").value;
    nsPreferences.setBoolPref(this.USE_CUSTOM_APPLICATION_KEY, prefUseCustomApplication);
    nsPreferences.setUnicharPref(this.CUSTOM_APPLICATION_PATH_KEY,prefCustomApplicationPath);
    nsPreferences.setUnicharPref(this.CUSTOM_APPLICATION_ARGUMENTS_KEY, prefCustomApplicationArguments);
  }
};
