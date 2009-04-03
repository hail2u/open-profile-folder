var openProfileFolder = {
  open: function() {
    var directoryService = Components.classes['@mozilla.org/file/directory_service;1'].getService(Components.interfaces.nsIProperties);
    var profileFolder = directoryService.get('ProfD', Components.interfaces.nsIFile);
    this.runApplication(profileFolder.QueryInterface(Components.interfaces.nsILocalFile).path);
  },

  runApplication: function(aFolder) {
    var fileLocal = Components.classes["@mozilla.org/file/local;1"].getService(Components.interfaces.nsILocalFile);
    fileLocal.initWithPath(aFolder);
    fileLocal.launch();
  }
};
