<span
style="font-size: 1.75em; font-weight: bold; line-height: 1.225;">API
References</span>\

-   [Synopsis](api/synopsis.md)
-   [Process Object](api/process.md)
-   [Supported Chrome Command Line
    Switches](api/chrome-command-line-switches.md)
-   [Environment Variables](api/environment-variables.md)

### Custom DOM Elements:

-   [`File` Object](api/file-object.md)
-   [`<webview>` Tag](api/web-view-tag.md)
-   [`window.open` Function](api/window-open.md)

### Modules for the Main Process:

-   [app](api/app.md)
-   [autoUpdater](api/auto-updater.md)
-   [BrowserWindow](api/browser-window.md)
-   [contentTracing](api/content-tracing.md)
-   [dialog](api/dialog.md)
-   [globalShortcut](api/global-shortcut.md)
-   [ipcMain](api/ipc-main.md)
-   [Menu](api/menu.md)
-   [MenuItem](api/menu-item.md)
-   [powerMonitor](api/power-monitor.md)
-   [powerSaveBlocker](api/power-save-blocker.md)
-   [protocol](api/protocol.md)
-   [session](api/session.md)
-   [webContents](api/web-contents.md)
-   [Tray](api/tray.md)

### Modules for the Renderer Process (Web Page):

-   [desktopCapturer](api/desktop-capturer.md)
-   [ipcRenderer](api/ipc-renderer.md)
-   [remote](api/remote.md)
-   [webFrame](api/web-frame.md)

### Modules for Both Processes:

-   [clipboard](api/clipboard.md)
-   [crashReporter](api/crash-reporter.md)
-   [nativeImage](api/native-image.md)
-   [screen](api/screen.md)
-   [shell](api/shell.md)

Development
-----------

-   [Coding Style](development/coding-style.md)
-   [Source Code Directory
    Structure](development/source-code-directory-structure.md)
-   [Technical Differences to NW.js
    (formerly node-webkit)](development/atom-shell-vs-node-webkit.md)
-   [Build System Overview](development/build-system-overview.md)
-   [Build Instructions (OS X)](development/build-instructions-osx.md)
-   [Build
    Instructions (Windows)](development/build-instructions-windows.md)
-   [Build
    Instructions (Linux)](development/build-instructions-linux.md)
-   [Setting Up Symbol Server in
    debugger](development/setting-up-symbol-server.md)

Electron Documentation Styleguide
=================================

Find the appropriate section for your task: [reading Electron
documentation](#reading-electron-documentation) or [writing Electron
documentation](#writing-electron-documentation).

Writing Electron Documentation
------------------------------

These are the ways that we construct the Electron documentation.

-   Maximum one `h1` title per page.
-   Use `bash` instead of `cmd` in code blocks (because of
    syntax highlighter).
-   Doc `h1` titles should match object name (i.e. `browser-window` →
    `BrowserWindow`).
    -   Hyphen separated filenames, however, are fine.
-   No headers following headers, add at least a
    one-sentence description.
-   Methods headers are wrapped in `code` ticks.
-   Event headers are wrapped in single 'quotation' marks.
-   No nesting lists more than 2 levels (unfortunately because of
    markdown renderer).
-   Add section titles: Events, Class Methods and Instance Methods.
-   Use 'will' over 'would' when describing outcomes.
-   Events and methods are `h3` headers.
-   Optional arguments written as `function (required[, optional])`.
-   Optional arguments are denoted when called out in list.
-   Line length is 80-column wrapped.
-   Platform specific methods are noted in italics following
    method header.
-   `` ### `method(foo, bar)` _OS X_ ``
-   Prefer 'in the \_\_\_ process' over 'on'

### Documentation Translations

Translations of the Electron docs are located within the
`docs-translations` directory.

To add another set (or partial set):

-   Create a subdirectory named by language abbreviation.
-   Within that subdirectory, duplicate the `docs` directory, keeping
    the names of directories and files same.
-   Translate the files.
-   Update the `README.md` within your language directory to link to the
    files you have translated.
-   Add a link to your translation directory on the main Electron
    [README](https://github.com/electron/electron#documentation-translations).

Reading Electron Documentation
------------------------------

Here are some tips for understanding Electron documentation syntax.

### Methods

An example of
[method](https://developer.mozilla.org/en-US/docs/Glossary/Method)
documentation:

------------------------------------------------------------------------

`methodName(required[, optional]))`

-   `require` String (**required**)
-   `optional` Integer

------------------------------------------------------------------------

The method name is followed by the arguments it takes. Optional
arguments are notated by brackets surrounding the optional argument as
well as the comma required if this optional argument follows another
argument.

Below the method is more detailed information on each of the arguments.
The type of argument is notated by either the common types:
[`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String),
[`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number),
[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object),
[`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
or a custom type like Electron's [`webContent`](api/web-content.md).

### Events

An example of
[event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
documentation:

------------------------------------------------------------------------

Event: 'wake-up'

Returns:

-   `time` String

------------------------------------------------------------------------

The event is a string that is used after a `.on` listener method. If it
returns a value it and its type is noted below. If you were to listen
and respond to this event it might look something like this:

    Alarm.on('wake-up', function(time) {
      console.log(time)
    })

Please make sure that you use the documents that match your Electron
version. The version number should be a part of the page URL. If it's
not, you are probably using the documentation of a development branch
which may contain API changes that are not compatible with your Electron
version. If that's the case, you can switch to a different version of
the documentation at the [available
versions](http://electron.atom.io/docs/) list on atom.io, or if you're
using the GitHub interface, open the "Switch branches/tags" dropdown and
select the tag that matches your version.

FAQ
---

There are questions that are asked quite often, check this out before
creating an issue:

-   [Electron FAQ](faq/electron-faq.md)

Guides
------

-   [Supported Platforms](tutorial/supported-platforms.md)
-   [Application Distribution](tutorial/application-distribution.md)
-   [Mac App Store Submission
    Guide](tutorial/mac-app-store-submission-guide.md)
-   [Application Packaging](tutorial/application-packaging.md)
-   [Using Native Node Modules](tutorial/using-native-node-modules.md)
-   [Debugging Main Process](tutorial/debugging-main-process.md)
-   [Using Selenium and
    WebDriver](tutorial/using-selenium-and-webdriver.md)
-   [DevTools Extension](tutorial/devtools-extension.md)
-   [Using Pepper Flash Plugin](tutorial/using-pepper-flash-plugin.md)
-   [Using Widevine CDM Plugin](tutorial/using-widevine-cdm-plugin.md)
-   [Testing on Headless CI Systems
    (Travis, Jenkins)](tutorial/testing-on-headless-ci.md)

Tutorials
---------

-   [Quick Start](tutorial/quick-start.md)
-   [Desktop Environment
    Integration](tutorial/desktop-environment-integration.md)
-   [Online/Offline Event Detection](tutorial/online-offline-events.md)

API References
--------------

-   [Synopsis](api/synopsis.md)
-   [Process Object](api/process.md)
-   [Supported Chrome Command Line
    Switches](api/chrome-command-line-switches.md)
-   [Environment Variables](api/environment-variables.md)

### Custom DOM Elements:

-   [`File` Object](api/file-object.md)
-   [`<webview>` Tag](api/web-view-tag.md)
-   [`window.open` Function](api/window-open.md)

### Modules for the Main Process:

-   [app](api/app.md)
-   [autoUpdater](api/auto-updater.md)
-   [BrowserWindow](api/browser-window.md)
-   [contentTracing](api/content-tracing.md)
-   [dialog](api/dialog.md)
-   [globalShortcut](api/global-shortcut.md)
-   [ipcMain](api/ipc-main.md)
-   [Menu](api/menu.md)
-   [MenuItem](api/menu-item.md)
-   [powerMonitor](api/power-monitor.md)
-   [powerSaveBlocker](api/power-save-blocker.md)
-   [protocol](api/protocol.md)
-   [session](api/session.md)
-   [webContents](api/web-contents.md)
-   [Tray](api/tray.md)

### Modules for the Renderer Process (Web Page):

-   [desktopCapturer](api/desktop-capturer.md)
-   [ipcRenderer](api/ipc-renderer.md)
-   [remote](api/remote.md)
-   [webFrame](api/web-frame.md)

### Modules for Both Processes:

-   [clipboard](api/clipboard.md)
-   [crashReporter](api/crash-reporter.md)
-   [nativeImage](api/native-image.md)
-   [screen](api/screen.md)
-   [shell](api/shell.md)

Development
-----------

-   [Coding Style](development/coding-style.md)
-   [Source Code Directory
    Structure](development/source-code-directory-structure.md)
-   [Technical Differences to NW.js
    (formerly node-webkit)](development/atom-shell-vs-node-webkit.md)
-   [Build System Overview](development/build-system-overview.md)
-   [Build Instructions (OS X)](development/build-instructions-osx.md)
-   [Build
    Instructions (Windows)](development/build-instructions-windows.md)
-   [Build
    Instructions (Linux)](development/build-instructions-linux.md)
-   [Setting Up Symbol Server in
    debugger](development/setting-up-symbol-server.md)

Electron Documentation Styleguide
=================================

Find the appropriate section for your task: [reading Electron
documentation](#reading-electron-documentation) or [writing Electron
documentation](#writing-electron-documentation).

Writing Electron Documentation
------------------------------

These are the ways that we construct the Electron documentation.

-   Maximum one `h1` title per page.
-   Use `bash` instead of `cmd` in code blocks (because of
    syntax highlighter).
-   Doc `h1` titles should match object name (i.e. `browser-window` →
    `BrowserWindow`).
    -   Hyphen separated filenames, however, are fine.
-   No headers following headers, add at least a
    one-sentence description.
-   Methods headers are wrapped in `code` ticks.
-   Event headers are wrapped in single 'quotation' marks.
-   No nesting lists more than 2 levels (unfortunately because of
    markdown renderer).
-   Add section titles: Events, Class Methods and Instance Methods.
-   Use 'will' over 'would' when describing outcomes.
-   Events and methods are `h3` headers.
-   Optional arguments written as `function (required[, optional])`.
-   Optional arguments are denoted when called out in list.
-   Line length is 80-column wrapped.
-   Platform specific methods are noted in italics following
    method header.
-   `` ### `method(foo, bar)` _OS X_ ``
-   Prefer 'in the \_\_\_ process' over 'on'

### Documentation Translations

Translations of the Electron docs are located within the
`docs-translations` directory.

To add another set (or partial set):

-   Create a subdirectory named by language abbreviation.
-   Within that subdirectory, duplicate the `docs` directory, keeping
    the names of directories and files same.
-   Translate the files.
-   Update the `README.md` within your language directory to link to the
    files you have translated.
-   Add a link to your translation directory on the main Electron
    [README](https://github.com/electron/electron#documentation-translations).

Reading Electron Documentation
------------------------------

Here are some tips for understanding Electron documentation syntax.

### Methods

An example of
[method](https://developer.mozilla.org/en-US/docs/Glossary/Method)
documentation:

------------------------------------------------------------------------

`methodName(required[, optional]))`

-   `require` String (**required**)
-   `optional` Integer

------------------------------------------------------------------------

The method name is followed by the arguments it takes. Optional
arguments are notated by brackets surrounding the optional argument as
well as the comma required if this optional argument follows another
argument.

Below the method is more detailed information on each of the arguments.
The type of argument is notated by either the common types:
[`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String),
[`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number),
[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object),
[`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
or a custom type like Electron's [`webContent`](api/web-content.md).

### Events

An example of
[event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
documentation:

------------------------------------------------------------------------

Event: 'wake-up'

Returns:

-   `time` String

------------------------------------------------------------------------

The event is a string that is used after a `.on` listener method. If it
returns a value it and its type is noted below. If you were to listen
and respond to this event it might look something like this:

    Alarm.on('wake-up', function(time) {
      console.log(time)
    })

Accelerator
===========

An accelerator is a string that represents a keyboard shortcut. It can
contain multiple modifiers and key codes, combined by the `+` character.

Examples:

-   `CommandOrControl+A`
-   `CommandOrControl+Shift+Z`

Platform notice
---------------

On Linux and Windows, the `Command` key does not have any effect so use
`CommandOrControl` which represents `Command` on OS X and `Control` on
Linux and Windows to define some accelerators.

Use `Alt` instead of `Option`. The `Option` key only exists on OS X,
whereas the `Alt` key is available on all platforms.

The `Super` key is mapped to the `Windows` key on Windows and Linux and
`Cmd` on OS X.

Available modifiers
-------------------

-   `Command` (or `Cmd` for short)
-   `Control` (or `Ctrl` for short)
-   `CommandOrControl` (or `CmdOrCtrl` for short)
-   `Alt`
-   `Option`
-   `AltGr`
-   `Shift`
-   `Super`

Available key codes
-------------------

-   `0` to `9`
-   `A` to `Z`
-   `F1` to `F24`
-   Punctuations like `~`, `!`, `@`, `#`, `$`, etc.
-   `Plus`
-   `Space`
-   `Backspace`
-   `Delete`
-   `Insert`
-   `Return` (or `Enter` as alias)
-   `Up`, `Down`, `Left` and `Right`
-   `Home` and `End`
-   `PageUp` and `PageDown`
-   `Escape` (or `Esc` for short)
-   `VolumeUp`, `VolumeDown` and `VolumeMute`
-   `MediaNextTrack`, `MediaPreviousTrack`, `MediaStop` and
    `MediaPlayPause`
-   `PrintScreen`

app
===

The `app` module is responsible for controlling the application's
lifecycle.

The following example shows how to quit the application when the last
window is closed:

    const app = require('electron').app;
    app.on('window-all-closed', function() {
      app.quit();
    });

Events
------

The `app` object emits the following events:

### Event: 'will-finish-launching'

Emitted when the application has finished basic startup. On Windows and
Linux, the `will-finish-launching` event is the same as the `ready`
event; on OS X, this event represents the
`applicationWillFinishLaunching` notification of `NSApplication`. You
would usually set up listeners for the `open-file` and `open-url` events
here, and start the crash reporter and auto updater.

In most cases, you should just do everything in the `ready` event
handler.

### Event: 'ready'

Emitted when Electron has finished initialization.

### Event: 'window-all-closed'

Emitted when all windows have been closed.

This event is only emitted when the application is not going to quit. If
the user pressed `Cmd + Q`, or the developer called `app.quit()`,
Electron will first try to close all the windows and then emit the
`will-quit` event, and in this case the `window-all-closed` event would
not be emitted.

### Event: 'before-quit'

Returns:

-   `event` Event

Emitted before the application starts closing its windows. Calling
`event.preventDefault()` will prevent the default behaviour, which is
terminating the application.

### Event: 'will-quit'

Returns:

-   `event` Event

Emitted when all windows have been closed and the application will quit.
Calling `event.preventDefault()` will prevent the default behaviour,
which is terminating the application.

See the description of the `window-all-closed` event for the differences
between the `will-quit` and `window-all-closed` events.

### Event: 'quit'

Returns:

-   `event` Event
-   `exitCode` Integer

Emitted when the application is quitting.

### Event: 'open-file' *OS X*

Returns:

-   `event` Event
-   `path` String

Emitted when the user wants to open a file with the application. The
`open-file` event is usually emitted when the application is already
open and the OS wants to reuse the application to open the file.
`open-file` is also emitted when a file is dropped onto the dock and the
application is not yet running. Make sure to listen for the `open-file`
event very early in your application startup to handle this case (even
before the `ready` event is emitted).

You should call `event.preventDefault()` if you want to handle this
event.

On Windows, you have to parse `process.argv` (in the main process) to
get the filepath.

### Event: 'open-url' *OS X*

Returns:

-   `event` Event
-   `url` String

Emitted when the user wants to open a URL with the application. The URL
scheme must be registered to be opened by your application.

You should call `event.preventDefault()` if you want to handle this
event.

### Event: 'activate' *OS X*

Returns:

-   `event` Event
-   `hasVisibleWindows` Boolean

Emitted when the application is activated, which usually happens when
clicks on the applications's dock icon.

### Event: 'browser-window-blur'

Returns:

-   `event` Event
-   `window` BrowserWindow

Emitted when a [browserWindow](browser-window.md) gets blurred.

### Event: 'browser-window-focus'

Returns:

-   `event` Event
-   `window` BrowserWindow

Emitted when a [browserWindow](browser-window.md) gets focused.

### Event: 'browser-window-created'

Returns:

-   `event` Event
-   `window` BrowserWindow

Emitted when a new [browserWindow](browser-window.md) is created.

### Event: 'certificate-error'

Returns:

-   `event` Event
-   `webContents` [WebContents](web-contents.md)
-   `url` URL
-   `error` String - The error code
-   `certificate` Object
    -   `data` Buffer - PEM encoded data
    -   `issuerName` String
-   `callback` Function

Emitted when failed to verify the `certificate` for `url`, to trust the
certificate you should prevent the default behavior with
`event.preventDefault()` and call `callback(true)`.

    app.on('certificate-error', function(event, webContents, url, error, certificate, callback) {
      if (url == "https://github.com") {
        // Verification logic.
        event.preventDefault();
        callback(true);
      } else {
        callback(false);
      }
    });

### Event: 'select-client-certificate'

Returns:

-   `event` Event
-   `webContents` [WebContents](web-contents.md)
-   `url` URL
-   `certificateList` \[Objects\]
    -   `data` Buffer - PEM encoded data
    -   `issuerName` String - Issuer's Common Name
-   `callback` Function

Emitted when a client certificate is requested.

The `url` corresponds to the navigation entry requesting the client
certificate and `callback` needs to be called with an entry filtered
from the list. Using `event.preventDefault()` prevents the application
from using the first certificate from the store.

    app.on('select-client-certificate', function(event, webContents, url, list, callback) {
      event.preventDefault();
      callback(list[0]);
    })

### Event: 'login'

Returns:

-   `event` Event
-   `webContents` [WebContents](web-contents.md)
-   `request` Object
    -   `method` String
    -   `url` URL
    -   `referrer` URL
-   `authInfo` Object
    -   `isProxy` Boolean
    -   `scheme` String
    -   `host` String
    -   `port` Integer
    -   `realm` String
-   `callback` Function

Emitted when `webContents` wants to do basic auth.

The default behavior is to cancel all authentications, to override this
you should prevent the default behavior with `event.preventDefault()`
and call `callback(username, password)` with the credentials.

    app.on('login', function(event, webContents, request, authInfo, callback) {
      event.preventDefault();
      callback('username', 'secret');
    })

### Event: 'gpu-process-crashed'

Emitted when the gpu process crashes.

### Event: 'platform-theme-changed' *OS X*

Emitted when the system's Dark Mode theme is toggled.

Methods
-------

The `app` object has the following methods:

**Note:** Some methods are only available on specific operating systems
and are labeled as such.

### `app.quit()`

Try to close all windows. The `before-quit` event will be emitted first.
If all windows are successfully closed, the `will-quit` event will be
emitted and by default the application will terminate.

This method guarantees that all `beforeunload` and `unload` event
handlers are correctly executed. It is possible that a window cancels
the quitting by returning `false` in the `beforeunload` event handler.

### `app.exit(exitCode)`

-   `exitCode` Integer

Exits immediately with `exitCode`.

All windows will be closed immediately without asking user and the
`before-quit` and `will-quit` events will not be emitted.

### `app.focus()`

On Linux, focuses on the first visible window. On OS X, makes the
application the active app. On Windows, focuses on the application's
first window.

### `app.hide()` *OS X*

Hides all application windows without minimizing them.

### `app.show()` *OS X*

Shows application windows after they were hidden. Does not automatically
focus them.

### `app.getAppPath()`

Returns the current application directory.

### `app.getPath(name)`

-   `name` String

Retrieves a path to a special directory or file associated with `name`.
On failure an `Error` is thrown.

You can request the following paths by the name:

-   `home` User's home directory.
-   `appData` Per-user application data directory, which by default
    points to:
    -   `%APPDATA%` on Windows
    -   `$XDG_CONFIG_HOME` or `~/.config` on Linux
    -   `~/Library/Application Support` on OS X
-   `userData` The directory for storing your app's configuration files,
    which by default it is the `appData` directory appended with your
    app's name.
-   `temp` Temporary directory.
-   `exe` The current executable file.
-   `module` The `libchromiumcontent` library.
-   `desktop` The current user's Desktop directory.
-   `documents` Directory for a user's "My Documents".
-   `downloads` Directory for a user's downloads.
-   `music` Directory for a user's music.
-   `pictures` Directory for a user's pictures.
-   `videos` Directory for a user's videos.

### `app.setPath(name, path)`

-   `name` String
-   `path` String

Overrides the `path` to a special directory or file associated with
`name`. If the path specifies a directory that does not exist, the
directory will be created by this method. On failure an `Error` is
thrown.

You can only override paths of a `name` defined in `app.getPath`.

By default, web pages' cookies and caches will be stored under the
`userData` directory. If you want to change this location, you have to
override the `userData` path before the `ready` event of the `app`
module is emitted.

### `app.getVersion()`

Returns the version of the loaded application. If no version is found in
the application's `package.json` file, the version of the current bundle
or executable is returned.

### `app.getName()`

Returns the current application's name, which is the name in the
application's `package.json` file.

Usually the `name` field of `package.json` is a short lowercased name,
according to the npm modules spec. You should usually also specify a
`productName` field, which is your application's full capitalized name,
and which will be preferred over `name` by Electron.

### `app.setName(name)`

-   `name` String

Overrides the current application's name.

### `app.getLocale()`

Returns the current application locale.

**Note:** When distributing your packaged app, you have to also ship the
`locales` folder.

**Note:** On Windows you have to call it after the `ready` events gets
emitted.

### `app.addRecentDocument(path)` *OS X* *Windows*

-   `path` String

Adds `path` to the recent documents list.

This list is managed by the OS. On Windows you can visit the list from
the task bar, and on OS X you can visit it from dock menu.

### `app.clearRecentDocuments()` *OS X* *Windows*

Clears the recent documents list.

### `app.setAsDefaultProtocolClient(protocol)` *OS X* *Windows*

-   `protocol` String - The name of your protocol, without `://`. If you
    want your app to handle `electron://` links, call this method with
    `electron` as the parameter.

This method sets the current executable as the default handler for a
protocol (aka URI scheme). It allows you to integrate your app deeper
into the operating system. Once registered, all links with
`your-protocol://` will be openend with the current executable. The
whole link, including protocol, will be passed to your application as a
parameter.

**Note:** On OS X, you can only register protocols that have been added
to your app's `info.plist`, which can not be modified at runtime. You
can however change the file with a simple text editor or script during
build time. Please refer to [Apple's
documentation](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/TP40009249-102207-TPXREF115)
for details.

The API uses the Windows Registry and LSSetDefaultHandlerForURLScheme
internally.

### `app.removeAsDefaultProtocolClient(protocol)` *Windows*

-   `protocol` String - The name of your protocol, without `://`.

This method checks if the current executable as the default handler for
a protocol (aka URI scheme). If so, it will remove the app as the
default handler.

**Note:** On OS X, removing the app will automatically remove the app as
the default protocol handler.

### `app.setUserTasks(tasks)` *Windows*

-   `tasks` Array - Array of `Task` objects

Adds `tasks` to the
[Tasks](http://msdn.microsoft.com/en-us/library/windows/desktop/dd378460(v=vs.85).aspx#tasks)
category of the JumpList on Windows.

`tasks` is an array of `Task` objects in the following format:

`Task` Object:

-   `program` String - Path of the program to execute, usually you
    should specify `process.execPath` which opens the current program.
-   `arguments` String - The command line arguments when `program`
    is executed.
-   `title` String - The string to be displayed in a JumpList.
-   `description` String - Description of this task.
-   `iconPath` String - The absolute path to an icon to be displayed in
    a JumpList, which can be an arbitrary resource file that contains
    an icon. You can usually specify `process.execPath` to show the icon
    of the program.
-   `iconIndex` Integer - The icon index in the icon file. If an icon
    file consists of two or more icons, set this value to identify
    the icon. If an icon file consists of one icon, this value is 0.

### `app.allowNTLMCredentialsForAllDomains(allow)`

-   `allow` Boolean

Dynamically sets whether to always send credentials for HTTP NTLM or
Negotiate authentication - normally, Electron will only send
NTLM/Kerberos credentials for URLs that fall under "Local Intranet"
sites (i.e. are in the same domain as you). However, this detection
often fails when corporate networks are badly configured, so this lets
you co-opt this behavior and enable it for all URLs.

### `app.makeSingleInstance(callback)`

-   `callback` Function

This method makes your application a Single Instance Application -
instead of allowing multiple instances of your app to run, this will
ensure that only a single instance of your app is running, and other
instances signal this instance and exit.

`callback` will be called with `callback(argv, workingDirectory)` when a
second instance has been executed. `argv` is an Array of the second
instance's command line arguments, and `workingDirectory` is its current
working directory. Usually applications respond to this by making their
primary window focused and non-minimized.

The `callback` is guaranteed to be executed after the `ready` event of
`app` gets emitted.

This method returns `false` if your process is the primary instance of
the application and your app should continue loading. And returns `true`
if your process has sent its parameters to another instance, and you
should immediately quit.

On OS X the system enforces single instance automatically when users try
to open a second instance of your app in Finder, and the `open-file` and
`open-url` events will be emitted for that. However when users start
your app in command line the system's single instance mechanism will be
bypassed and you have to use this method to ensure single instance.

An example of activating the window of primary instance when a second
instance starts:

    var myWindow = null;

    var shouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
      // Someone tried to run a second instance, we should focus our window.
      if (myWindow) {
        if (myWindow.isMinimized()) myWindow.restore();
        myWindow.focus();
      }
    });

    if (shouldQuit) {
      app.quit();
      return;
    }

    // Create myWindow, load the rest of the app, etc...
    app.on('ready', function() {
    });

### `app.setAppUserModelId(id)` *Windows*

-   `id` String

Changes the [Application User Model
ID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx)
to `id`.

### `app.isAeroGlassEnabled()` *Windows*

This method returns `true` if [DWM
composition](https://msdn.microsoft.com/en-us/library/windows/desktop/aa969540.aspx)
(Aero Glass) is enabled, and `false` otherwise. You can use it to
determine if you should create a transparent window or not (transparent
windows won't work correctly when DWM composition is disabled).

Usage example:

    let browserOptions = {width: 1000, height: 800};

    // Make the window transparent only if the platform supports it.
    if (process.platform !== 'win32' || app.isAeroGlassEnabled()) {
      browserOptions.transparent = true;
      browserOptions.frame = false;
    }

    // Create the window.
    win = new BrowserWindow(browserOptions);

    // Navigate.
    if (browserOptions.transparent) {
      win.loadURL('file://' + __dirname + '/index.html');
    } else {
      // No transparency, so we load a fallback that uses basic styles.
      win.loadURL('file://' + __dirname + '/fallback.html');
    }

### `app.isDarkMode()` *OS X*

This method returns `true` if the system is in Dark Mode, and `false`
otherwise.

### `app.commandLine.appendSwitch(switch[, value])`

Append a switch (with optional `value`) to Chromium's command line.

**Note:** This will not affect `process.argv`, and is mainly used by
developers to control some low-level Chromium behaviors.

### `app.commandLine.appendArgument(value)`

Append an argument to Chromium's command line. The argument will be
quoted correctly.

**Note:** This will not affect `process.argv`.

### `app.dock.bounce([type])` *OS X*

-   `type` String (optional) - Can be `critical` or `informational`. The
    default is `informational`

When `critical` is passed, the dock icon will bounce until either the
application becomes active or the request is canceled.

When `informational` is passed, the dock icon will bounce for one
second. However, the request remains active until either the application
becomes active or the request is canceled.

Returns an ID representing the request.

### `app.dock.cancelBounce(id)` *OS X*

-   `id` Integer

Cancel the bounce of `id`.

### `app.dock.setBadge(text)` *OS X*

-   `text` String

Sets the string to be displayed in the dock’s badging area.

### `app.dock.getBadge()` *OS X*

Returns the badge string of the dock.

### `app.dock.hide()` *OS X*

Hides the dock icon.

### `app.dock.show()` *OS X*

Shows the dock icon.

### `app.dock.setMenu(menu)` *OS X*

-   `menu` [Menu](menu.md)

Sets the application's [dock
menu](https://developer.apple.com/library/mac/documentation/Carbon/Conceptual/customizing_docktile/concepts/dockconcepts.html#//apple_ref/doc/uid/TP30000986-CH2-TPXREF103).

### `app.dock.setIcon(image)` *OS X*

-   `image` [NativeImage](native-image.md)

Sets the `image` associated with this dock icon.

autoUpdater
===========

This module provides an interface for the `Squirrel` auto-updater
framework.

You can quickly launch a multi-platform release server for distributing
your application by using one of these projects:

-   [electron-release-server](https://github.com/ArekSredzki/electron-release-server):
    *A fully featured, self-hosted release server for electron
    applications, compatible with auto-updater*
-   [squirrel-updates-server](https://github.com/Aluxian/squirrel-updates-server):
    *A simple node.js server for Squirrel.Mac and Squirrel.Windows which
    uses GitHub releases*

Platform notices
----------------

Though `autoUpdater` provides a uniform API for different platforms,
there are still some subtle differences on each platform.

### OS X

On OS X, the `autoUpdater` module is built upon
[Squirrel.Mac](https://github.com/Squirrel/Squirrel.Mac), meaning you
don't need any special setup to make it work. For server-side
requirements, you can read [Server
Support](https://github.com/Squirrel/Squirrel.Mac#server-support).

**Note:** Your application must be signed for automatic updates on Mac
OS X. This is a requirement of `Squirrel.Mac`.

### Windows

On Windows, you have to install your app into a user's machine before
you can use the auto-updater, so it is recommended to use
[grunt-electron-installer](https://github.com/atom/grunt-electron-installer)
module to generate a Windows installer.

The installer generated with Squirrel will create a shortcut icon with
an [Application User Model
ID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx)
in the format of `com.squirrel.PACKAGE_ID.YOUR_EXE_WITHOUT_DOT_EXE`,
examples are `com.squirrel.slack.Slack` and `com.squirrel.code.Code`.
You have to use the same ID for your app with `app.setAppUserModelId`
API, otherwise Windows will not be able to pin your app properly in task
bar.

The server-side setup is also different from OS X. You can read the
documents of
[Squirrel.Windows](https://github.com/Squirrel/Squirrel.Windows) to get
more details.

### Linux

There is no built-in support for auto-updater on Linux, so it is
recommended to use the distribution's package manager to update your
app.

Events
------

The `autoUpdater` object emits the following events:

### Event: 'error'

Returns:

-   `error` Error

Emitted when there is an error while updating.

### Event: 'checking-for-update'

Emitted when checking if an update has started.

### Event: 'update-available'

Emitted when there is an available update. The update is downloaded
automatically.

### Event: 'update-not-available'

Emitted when there is no available update.

### Event: 'update-downloaded'

Returns:

-   `event` Event
-   `releaseNotes` String
-   `releaseName` String
-   `releaseDate` Date
-   `updateURL` String

Emitted when an update has been downloaded.

On Windows only `releaseName` is available.

Methods
-------

The `autoUpdater` object has the following methods:

### `autoUpdater.setFeedURL(url)`

-   `url` String

Sets the `url` and initialize the auto updater. The `url` cannot be
changed once it is set.

### `autoUpdater.checkForUpdates()`

Asks the server whether there is an update. You must call `setFeedURL`
before using this API.

### `autoUpdater.quitAndInstall()`

Restarts the app and installs the update after it has been downloaded.
It should only be called after `update-downloaded` has been emitted.

BrowserWindow
=============

The `BrowserWindow` class gives you the ability to create a browser
window. For example:

    // In the main process.
    const BrowserWindow = require('electron').BrowserWindow;

    // Or in the renderer process.
    const BrowserWindow = require('electron').remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600, show: false });
    win.on('closed', function() {
      win = null;
    });

    win.loadURL('https://github.com');
    win.show();

You can also create a window without chrome by using [Frameless
Window](frameless-window.md) API.

Class: BrowserWindow
--------------------

`BrowserWindow` is an
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

It creates a new `BrowserWindow` with native properties as set by the
`options`.

### `new BrowserWindow([options])`

-   `options` Object
    -   `width` Integer - Window's width in pixels. Default is `800`.
    -   `height` Integer - Window's height in pixels. Default is `600`.
    -   `x` Integer - Window's left offset from screen. Default is to
        center the window.
    -   `y` Integer - Window's top offset from screen. Default is to
        center the window.
    -   `useContentSize` Boolean - The `width` and `height` would be
        used as web page's size, which means the actual window's size
        will include window frame's size and be slightly larger. Default
        is `false`.
    -   `center` Boolean - Show window in the center of the screen.
    -   `minWidth` Integer - Window's minimum width. Default is `0`.
    -   `minHeight` Integer - Window's minimum height. Default is `0`.
    -   `maxWidth` Integer - Window's maximum width. Default is
        no limit.
    -   `maxHeight` Integer - Window's maximum height. Default is
        no limit.
    -   `resizable` Boolean - Whether window is resizable. Default is
        `true`.
    -   `movable` Boolean - Whether window is movable. This is not
        implemented on Linux. Default is `true`.
    -   `minimizable` Boolean - Whether window is minimizable. This is
        not implemented on Linux. Default is `true`.
    -   `maximizable` Boolean - Whether window is maximizable. This is
        not implemented on Linux. Default is `true`.
    -   `closable` Boolean - Whether window is closable. This is not
        implemented on Linux. Default is `true`.
    -   `alwaysOnTop` Boolean - Whether the window should always stay on
        top of other windows. Default is `false`.
    -   `fullscreen` Boolean - Whether the window should show
        in fullscreen. When explicity set to `false` the fullscreen
        button will be hidden or disabled on OS X. Default is `false`.
    -   `fullscreenable` Boolean - Whether the maximize/zoom button on
        OS X should toggle full screen mode or maximize window. Default
        is `true`.
    -   `skipTaskbar` Boolean - Whether to show the window in taskbar.
        Default is `false`.
    -   `kiosk` Boolean - The kiosk mode. Default is `false`.
    -   `title` String - Default window title. Default is `"Electron"`.
    -   `icon` [NativeImage](native-image.md) - The window icon, when
        omitted on Windows the executable's icon would be used as
        window icon.
    -   `show` Boolean - Whether window should be shown when created.
        Default is `true`.
    -   `frame` Boolean - Specify `false` to create a [Frameless
        Window](frameless-window.md). Default is `true`.
    -   `acceptFirstMouse` Boolean - Whether the web view accepts a
        single mouse-down event that simultaneously activates
        the window. Default is `false`.
    -   `disableAutoHideCursor` Boolean - Whether to hide cursor
        when typing. Default is `false`.
    -   `autoHideMenuBar` Boolean - Auto hide the menu bar unless the
        `Alt` key is pressed. Default is `false`.
    -   `enableLargerThanScreen` Boolean - Enable the window to be
        resized larger than screen. Default is `false`.
    -   `backgroundColor` String - Window's background color as
        Hexadecimal value, like `#66CD00` or `#FFF` or `#80FFFFFF`
        (alpha is supported). Default is `#FFF` (white).
    -   `hasShadow` Boolean - Whether window should have a shadow. This
        is only implemented on OS X. Default is `true`.
    -   `darkTheme` Boolean - Forces using dark theme for the window,
        only works on some GTK+3 desktop environments. Default is
        `false`.
    -   `transparent` Boolean - Makes the window
        [transparent](frameless-window.md). Default is `false`.
    -   `type` String - The type of window, default is normal window.
        See more about this below.
    -   `titleBarStyle` String - The style of window title bar. See more
        about this below.
    -   `webPreferences` Object - Settings of web page's features. See
        more about this below.

The possible values and behaviors of `type` option are platform
dependent, supported values are:

-   On Linux, possible types are `desktop`, `dock`, `toolbar`, `splash`,
    `notification`.
-   On OS X, possible types are `desktop`, `textured`.
    -   The `textured` type adds metal gradient appearance
        (`NSTexturedBackgroundWindowMask`).
    -   The `desktop` type places the window at the desktop background
        window level (`kCGDesktopWindowLevel - 1`). Note that desktop
        window will not receive focus, keyboard or mouse events, but you
        can use `globalShortcut` to receive input sparingly.

The `titleBarStyle` option is only supported on OS X 10.10 Yosemite and
newer. Possible values are:

-   `default` or not specified, results in the standard gray opaque Mac
    title bar.
-   `hidden` results in a hidden title bar and a full size content
    window, yet the title bar still has the standard window controls
    ("traffic lights") in the top left.
-   `hidden-inset` results in a hidden title bar with an alternative
    look where the traffic light buttons are slightly more inset from
    the window edge.

The `webPreferences` option is an object that can have following
properties:

-   `nodeIntegration` Boolean - Whether node integration is enabled.
    Default is `true`.
-   `preload` String - Specifies a script that will be loaded before
    other scripts run in the page. This script will always have access
    to node APIs no matter whether node integration is turned on or off.
    The value should be the absolute file path to the script. When node
    integration is turned off, the preload script can reintroduce Node
    global symbols back to the global scope. See example
    [here](process.md#event-loaded).
-   `session` [Session](session.md#class-session) - Sets the session
    used by the page. Instead of passing the Session object directly,
    you can also choose to use the `partition` option instead, which
    accepts a partition string. When both `session` and `partition` are
    provided, `session` would be preferred. Default is the
    default session.
-   `partition` String - Sets the session used by the page according to
    the session's partition string. If `partition` starts with
    `persist:`, the page will use a persistent session available to all
    pages in the app with the same `partition`. if there is no
    `persist:` prefix, the page will use an in-memory session. By
    assigning the same `partition`, multiple pages can share the
    same session. Default is the default session.
-   `zoomFactor` Number - The default zoom factor of the page, `3.0`
    represents `300%`. Default is `1.0`.
-   `javascript` Boolean - Enables JavaScript support. Default is
    `true`.
-   `webSecurity` Boolean - When setting `false`, it will disable the
    same-origin policy (Usually using testing websites by people), and
    set `allowDisplayingInsecureContent` and
    `allowRunningInsecureContent` to `true` if these two options are not
    set by user. Default is `true`.
-   `allowDisplayingInsecureContent` Boolean - Allow an https page to
    display content like images from http URLs. Default is `false`.
-   `allowRunningInsecureContent` Boolean - Allow a https page to run
    JavaScript, CSS or plugins from http URLs. Default is `false`.
-   `images` Boolean - Enables image support. Default is `true`.
-   `textAreasAreResizable` Boolean - Make TextArea elements resizable.
    Default is `true`.
-   `webgl` Boolean - Enables WebGL support. Default is `true`.
-   `webaudio` Boolean - Enables WebAudio support. Default is `true`.
-   `plugins` Boolean - Whether plugins should be enabled. Default is
    `false`.
-   `experimentalFeatures` Boolean - Enables Chromium's
    experimental features. Default is `false`.
-   `experimentalCanvasFeatures` Boolean - Enables Chromium's
    experimental canvas features. Default is `false`.
-   `directWrite` Boolean - Enables DirectWrite font rendering system
    on Windows. Default is `true`.
-   `blinkFeatures` String - A list of feature strings separated by `,`,
    like `CSSVariables,KeyboardEventKey`. The full list of supported
    feature strings can be found in the
    [setFeatureEnabledFromString](https://code.google.com/p/chromium/codesearch#chromium/src/out/Debug/gen/blink/platform/RuntimeEnabledFeatures.cpp&sq=package:chromium&type=cs&l=527) function.
-   `defaultFontFamily` Object - Sets the default font for
    the font-family.
    -   `standard` String - Defaults to `Times New Roman`.
    -   `serif` String - Defaults to `Times New Roman`.
    -   `sansSerif` String - Defaults to `Arial`.
    -   `monospace` String - Defaults to `Courier New`.
-   `defaultFontSize` Integer - Defaults to `16`.
-   `defaultMonospaceFontSize` Integer - Defaults to `13`.
-   `minimumFontSize` Integer - Defaults to `0`.
-   `defaultEncoding` String - Defaults to `ISO-8859-1`.
-   `backgroundThrottling` Boolean - Whether to throttle animations and
    timers when the page becomes background. Defaults to `true`.

Events
------

The `BrowserWindow` object emits the following events:

**Note:** Some events are only available on specific operating systems
and are labeled as such.

### Event: 'page-title-updated'

Returns:

-   `event` Event

Emitted when the document changed its title, calling
`event.preventDefault()` would prevent the native window's title to
change.

### Event: 'close'

Returns:

-   `event` Event

Emitted when the window is going to be closed. It's emitted before the
`beforeunload` and `unload` event of the DOM. Calling
`event.preventDefault()` will cancel the close.

Usually you would want to use the `beforeunload` handler to decide
whether the window should be closed, which will also be called when the
window is reloaded. In Electron, returning an empty string or `false`
would cancel the close. For example:

    window.onbeforeunload = function(e) {
      console.log('I do not want to be closed');

      // Unlike usual browsers, in which a string should be returned and the user is
      // prompted to confirm the page unload, Electron gives developers more options.
      // Returning empty string or false would prevent the unloading now.
      // You can also use the dialog API to let the user confirm closing the application.
      e.returnValue = false;
    };

### Event: 'closed'

Emitted when the window is closed. After you have received this event
you should remove the reference to the window and avoid using it
anymore.

### Event: 'unresponsive'

Emitted when the web page becomes unresponsive.

### Event: 'responsive'

Emitted when the unresponsive web page becomes responsive again.

### Event: 'blur'

Emitted when the window loses focus.

### Event: 'focus'

Emitted when the window gains focus.

### Event: 'show'

Emitted when the window is shown.

### Event: 'hide'

Emitted when the window is hidden.

### Event: 'maximize'

Emitted when window is maximized.

### Event: 'unmaximize'

Emitted when the window exits from maximized state.

### Event: 'minimize'

Emitted when the window is minimized.

### Event: 'restore'

Emitted when the window is restored from minimized state.

### Event: 'resize'

Emitted when the window is getting resized.

### Event: 'move'

Emitted when the window is getting moved to a new position.

**Note**: On OS X this event is just an alias of `moved`.

### Event: 'moved' *OS X*

Emitted once when the window is moved to a new position.

### Event: 'enter-full-screen'

Emitted when the window enters full screen state.

### Event: 'leave-full-screen'

Emitted when the window leaves full screen state.

### Event: 'enter-html-full-screen'

Emitted when the window enters full screen state triggered by html api.

### Event: 'leave-html-full-screen'

Emitted when the window leaves full screen state triggered by html api.

### Event: 'app-command' *Windows*

Returns:

-   `event` Event
-   `command` String

Emitted when an [App
Command](https://msdn.microsoft.com/en-us/library/windows/desktop/ms646275(v=vs.85).aspx)
is invoked. These are typically related to keyboard media keys or
browser commands, as well as the "Back" button built into some mice on
Windows.

Commands are lowercased with underscores replaced with hyphens and the
`APPCOMMAND_` prefix stripped off. e.g. `APPCOMMAND_BROWSER_BACKWARD` is
emitted as `browser-backward`.

    someWindow.on('app-command', function(e, cmd) {
      // Navigate the window back when the user hits their mouse back button
      if (cmd === 'browser-backward' && someWindow.webContents.canGoBack()) {
        someWindow.webContents.goBack();
      }
    });

### Event: 'scroll-touch-begin' *OS X*

Emitted when scroll wheel event phase has begun.

### Event: 'scroll-touch-end' *OS X*

Emitted when scroll wheel event phase has ended.

### Event: 'swipe' *OS X*

Returns:

-   `event` Event
-   `direction` String

Emitted on 3-finger swipe. Possible directions are `up`, `right`,
`down`, `left`.

Methods
-------

The `BrowserWindow` object has the following methods:

### `BrowserWindow.getAllWindows()`

Returns an array of all opened browser windows.

### `BrowserWindow.getFocusedWindow()`

Returns the window that is focused in this application, otherwise
returns `null`.

### `BrowserWindow.fromWebContents(webContents)`

-   `webContents` [WebContents](web-contents.md)

Find a window according to the `webContents` it owns.

### `BrowserWindow.fromId(id)`

-   `id` Integer

Find a window according to its ID.

### `BrowserWindow.addDevToolsExtension(path)`

-   `path` String

Adds DevTools extension located at `path`, and returns extension's name.

The extension will be remembered so you only need to call this API once,
this API is not for programming use.

### `BrowserWindow.removeDevToolsExtension(name)`

-   `name` String

Remove the DevTools extension whose name is `name`.

Instance Properties
-------------------

Objects created with `new BrowserWindow` have the following properties:

    // In this example `win` is our instance
    var win = new BrowserWindow({ width: 800, height: 600 });

### `win.webContents`

The `WebContents` object this window owns, all web page related events
and operations will be done via it.

See the [`webContents` documentation](web-contents.md) for its methods
and events.

### `win.id`

The unique ID of this window.

Instance Methods
----------------

Objects created with `new BrowserWindow` have the following instance
methods:

**Note:** Some methods are only available on specific operating systems
and are labeled as such.

### `win.destroy()`

Force closing the window, the `unload` and `beforeunload` event won't be
emitted for the web page, and `close` event will also not be emitted for
this window, but it guarantees the `closed` event will be emitted.

### `win.close()`

Try to close the window, this has the same effect with user manually
clicking the close button of the window. The web page may cancel the
close though, see the [close event](#event-close).

### `win.focus()`

Focus on the window.

### `win.blur()`

Remove focus on the window.

### `win.isFocused()`

Returns a boolean, whether the window is focused.

### `win.show()`

Shows and gives focus to the window.

### `win.showInactive()`

Shows the window but doesn't focus on it.

### `win.hide()`

Hides the window.

### `win.isVisible()`

Returns a boolean, whether the window is visible to the user.

### `win.maximize()`

Maximizes the window.

### `win.unmaximize()`

Unmaximizes the window.

### `win.isMaximized()`

Returns a boolean, whether the window is maximized.

### `win.minimize()`

Minimizes the window. On some platforms the minimized window will be
shown in the Dock.

### `win.restore()`

Restores the window from minimized state to its previous state.

### `win.isMinimized()`

Returns a boolean, whether the window is minimized.

### `win.setFullScreen(flag)`

-   `flag` Boolean

Sets whether the window should be in fullscreen mode.

### `win.isFullScreen()`

Returns a boolean, whether the window is in fullscreen mode.

### `win.setAspectRatio(aspectRatio[, extraSize])` *OS X*

-   `aspectRatio` The aspect ratio we want to maintain for some portion
    of the content view.
-   `extraSize` Object (optional) - The extra size not to be included
    while maintaining the aspect ratio.
    -   `width` Integer
    -   `height` Integer

This will have a window maintain an aspect ratio. The extra size allows
a developer to have space, specified in pixels, not included within the
aspect ratio calculations. This API already takes into account the
difference between a window's size and its content size.

Consider a normal window with an HD video player and associated
controls. Perhaps there are 15 pixels of controls on the left edge, 25
pixels of controls on the right edge and 50 pixels of controls below the
player. In order to maintain a 16:9 aspect ratio (standard aspect ratio
for HD @1920x1080) within the player itself we would call this function
with arguments of 16/9 and \[ 40, 50 \]. The second argument doesn't
care where the extra width and height are within the content view--only
that they exist. Just sum any extra width and height areas you have
within the overall content view.

### `win.setBounds(options[, animate])`

-   `options` Object
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer
-   `animate` Boolean (optional) *OS X*

Resizes and moves the window to `width`, `height`, `x`, `y`.

### `win.getBounds()`

Returns an object that contains window's width, height, x and y values.

### `win.setSize(width, height[, animate])`

-   `width` Integer
-   `height` Integer
-   `animate` Boolean (optional) *OS X*

Resizes the window to `width` and `height`.

### `win.getSize()`

Returns an array that contains window's width and height.

### `win.setContentSize(width, height[, animate])`

-   `width` Integer
-   `height` Integer
-   `animate` Boolean (optional) *OS X*

Resizes the window's client area (e.g. the web page) to `width` and
`height`.

### `win.getContentSize()`

Returns an array that contains window's client area's width and height.

### `win.setMinimumSize(width, height)`

-   `width` Integer
-   `height` Integer

Sets the minimum size of window to `width` and `height`.

### `win.getMinimumSize()`

Returns an array that contains window's minimum width and height.

### `win.setMaximumSize(width, height)`

-   `width` Integer
-   `height` Integer

Sets the maximum size of window to `width` and `height`.

### `win.getMaximumSize()`

Returns an array that contains window's maximum width and height.

### `win.setResizable(resizable)`

-   `resizable` Boolean

Sets whether the window can be manually resized by user.

### `win.isResizable()`

Returns whether the window can be manually resized by user.

### `win.setMovable(movable)` *OS X* *Windows*

-   `movable` Boolean

Sets whether the window can be moved by user. On Linux does nothing.

### `win.isMovable()` *OS X* *Windows*

Returns whether the window can be moved by user. On Linux always returns
`true`.

### `win.setMinimizable(minimizable)` *OS X* *Windows*

-   `minimizable` Boolean

Sets whether the window can be manually minimized by user. On Linux does
nothing.

### `win.isMinimizable()` *OS X* *Windows*

Returns whether the window can be manually minimized by user. On Linux
always returns `true`.

### `win.setMaximizable(maximizable)` *OS X* *Windows*

-   `maximizable` Boolean

Sets whether the window can be manually maximized by user. On Linux does
nothing.

### `win.isMaximizable()` *OS X* *Windows*

Returns whether the window can be manually maximized by user. On Linux
always returns `true`.

### `win.setFullScreenable(fullscreenable)`

-   `fullscreenable` Boolean

Sets whether the maximize/zoom window button toggles fullscreen mode or
maximizes the window.

### `win.isFullScreenable()`

Returns whether the maximize/zoom window button toggles fullscreen mode
or maximizes the window.

### `win.setClosable(closable)` *OS X* *Windows*

-   `closable` Boolean

Sets whether the window can be manually closed by user. On Linux does
nothing.

### `win.isClosable()` *OS X* *Windows*

Returns whether the window can be manually closed by user. On Linux
always returns `true`.

### `win.setAlwaysOnTop(flag)`

-   `flag` Boolean

Sets whether the window should show always on top of other windows.
After setting this, the window is still a normal window, not a toolbox
window which can not be focused on.

### `win.isAlwaysOnTop()`

Returns whether the window is always on top of other windows.

### `win.center()`

Moves window to the center of the screen.

### `win.setPosition(x, y[, animate])`

-   `x` Integer
-   `y` Integer
-   `animate` Boolean (optional) *OS X*

Moves window to `x` and `y`.

### `win.getPosition()`

Returns an array that contains window's current position.

### `win.setTitle(title)`

-   `title` String

Changes the title of native window to `title`.

### `win.getTitle()`

Returns the title of the native window.

**Note:** The title of web page can be different from the title of the
native window.

### `win.flashFrame(flag)`

-   `flag` Boolean

Starts or stops flashing the window to attract user's attention.

### `win.setSkipTaskbar(skip)`

-   `skip` Boolean

Makes the window not show in the taskbar.

### `win.setKiosk(flag)`

-   `flag` Boolean

Enters or leaves the kiosk mode.

### `win.isKiosk()`

Returns whether the window is in kiosk mode.

### `win.getNativeWindowHandle()`

Returns the platform-specific handle of the window as `Buffer`.

The native type of the handle is `HWND` on Windows, `NSView*` on OS X,
and `Window` (`unsigned long`) on Linux.

### `win.hookWindowMessage(message, callback)` *Windows*

-   `message` Integer
-   `callback` Function

Hooks a windows message. The `callback` is called when the message is
received in the WndProc.

### `win.isWindowMessageHooked(message)` *Windows*

-   `message` Integer

Returns `true` or `false` depending on whether the message is hooked.

### `win.unhookWindowMessage(message)` *Windows*

-   `message` Integer

Unhook the window message.

### `win.unhookAllWindowMessages()` *Windows*

Unhooks all of the window messages.

### `win.setRepresentedFilename(filename)` *OS X*

-   `filename` String

Sets the pathname of the file the window represents, and the icon of the
file will show in window's title bar.

### `win.getRepresentedFilename()` *OS X*

Returns the pathname of the file the window represents.

### `win.setDocumentEdited(edited)` *OS X*

-   `edited` Boolean

Specifies whether the window’s document has been edited, and the icon in
title bar will become gray when set to `true`.

### `win.isDocumentEdited()` *OS X*

Whether the window's document has been edited.

### `win.focusOnWebView()`

### `win.blurWebView()`

### `win.capturePage([rect, ]callback)`

-   `rect` Object (optional) - The area of page to be captured
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer
-   `callback` Function

Captures a snapshot of the page within `rect`. Upon completion
`callback` will be called with `callback(image)`. The `image` is an
instance of [NativeImage](native-image.md) that stores data of the
snapshot. Omitting `rect` will capture the whole visible page.

### `win.print([options])`

Same as `webContents.print([options])`

### `win.printToPDF(options, callback)`

Same as `webContents.printToPDF(options, callback)`

### `win.loadURL(url[, options])`

Same as `webContents.loadURL(url[, options])`.

### `win.reload()`

Same as `webContents.reload`.

### `win.setMenu(menu)` *Linux* *Windows*

-   `menu` Menu

Sets the `menu` as the window's menu bar, setting it to `null` will
remove the menu bar.

### `win.setProgressBar(progress)`

-   `progress` Double

Sets progress value in progress bar. Valid range is \[0, 1.0\].

Remove progress bar when progress &lt; 0; Change to indeterminate mode
when progress &gt; 1.

On Linux platform, only supports Unity desktop environment, you need to
specify the `*.desktop` file name to `desktopName` field in
`package.json`. By default, it will assume `app.getName().desktop`.

### `win.setOverlayIcon(overlay, description)` *Windows 7+*

-   `overlay` [NativeImage](native-image.md) - the icon to display on
    the bottom right corner of the taskbar icon. If this parameter is
    `null`, the overlay is cleared
-   `description` String - a description that will be provided to
    Accessibility screen readers

Sets a 16 x 16 pixel overlay onto the current taskbar icon, usually used
to convey some sort of application status or to passively notify the
user.

### `win.setHasShadow(hasShadow)` *OS X*

-   `hasShadow` (Boolean)

Sets whether the window should have a shadow. On Windows and Linux does
nothing.

### `win.hasShadow()` *OS X*

Returns whether the window has a shadow. On Windows and Linux always
returns `true`.

### `win.setThumbarButtons(buttons)` *Windows 7+*

-   `buttons` Array

Add a thumbnail toolbar with a specified set of buttons to the thumbnail
image of a window in a taskbar button layout. Returns a `Boolean` object
indicates whether the thumbnail has been added successfully.

The number of buttons in thumbnail toolbar should be no greater than 7
due to the limited room. Once you setup the thumbnail toolbar, the
toolbar cannot be removed due to the platform's limitation. But you can
call the API with an empty array to clean the buttons.

The `buttons` is an array of `Button` objects:

-   `Button` Object
    -   `icon` [NativeImage](native-image.md) - The icon showing in
        thumbnail toolbar.
    -   `click` Function
    -   `tooltip` String (optional) - The text of the button's tooltip.
    -   `flags` Array (optional) - Control specific states and behaviors
        of the button. By default, it is `['enabled']`.

The `flags` is an array that can include following `String`s:

-   `enabled` - The button is active and available to the user.
-   `disabled` - The button is disabled. It is present, but has a visual
    state indicating it will not respond to user action.
-   `dismissonclick` - When the button is clicked, the thumbnail window
    closes immediately.
-   `nobackground` - Do not draw a button border, use only the image.
-   `hidden` - The button is not shown to the user.
-   `noninteractive` - The button is enabled but not interactive; no
    pressed button state is drawn. This value is intended for instances
    where the button is used in a notification.

### `win.showDefinitionForSelection()` *OS X*

Shows pop-up dictionary that searches the selected word on the page.

### `win.setAutoHideMenuBar(hide)`

-   `hide` Boolean

Sets whether the window menu bar should hide itself automatically. Once
set the menu bar will only show when users press the single `Alt` key.

If the menu bar is already visible, calling `setAutoHideMenuBar(true)`
won't hide it immediately.

### `win.isMenuBarAutoHide()`

Returns whether menu bar automatically hides itself.

### `win.setMenuBarVisibility(visible)`

-   `visible` Boolean

Sets whether the menu bar should be visible. If the menu bar is
auto-hide, users can still bring up the menu bar by pressing the single
`Alt` key.

### `win.isMenuBarVisible()`

Returns whether the menu bar is visible.

### `win.setVisibleOnAllWorkspaces(visible)`

-   `visible` Boolean

Sets whether the window should be visible on all workspaces.

**Note:** This API does nothing on Windows.

### `win.isVisibleOnAllWorkspaces()`

Returns whether the window is visible on all workspaces.

**Note:** This API always returns false on Windows.

### `win.setIgnoreMouseEvents(ignore)` *OS X*

-   `ignore` Boolean

Ignore all moused events that happened in the window.

Supported Chrome command line switches
======================================

This page lists the command line switches used by the Chrome browser
that are also supported by Electron. You can use
[app.commandLine.appendSwitch](app.md#appcommandlineappendswitchswitch-value)
to append them in your app's main script before the
[ready](app.md#event-ready) event of [app](app.md) module is emitted:

    const app = require('electron').app;
    app.commandLine.appendSwitch('remote-debugging-port', '8315');
    app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');

    app.on('ready', function() {
      // Your code here
    });

--client-certificate=`path`
---------------------------

Sets the `path` of client certificate file.

--ignore-connections-limit=`domains`
------------------------------------

Ignore the connections limit for `domains` list separated by `,`.

--disable-http-cache
--------------------

Disables the disk cache for HTTP requests.

--remote-debugging-port=`port`
------------------------------

Enables remote debugging over HTTP on the specified `port`.

--js-flags=`flags`
------------------

Specifies the flags passed to JS engine. It has to be passed when
starting Electron if you want to enable the `flags` in the main process.

    $ electron --js-flags="--harmony_proxies --harmony_collections" your-app

--proxy-server=`address:port`
-----------------------------

Use a specified proxy server, which overrides the system setting. This
switch only affects requests with HTTP protocol, including HTTPS and
WebSocket requests. It is also noteworthy that not all proxy servers
support HTTPS and WebSocket requests.

--proxy-bypass-list=`hosts`
---------------------------

Instructs Electron to bypass the proxy server for the given
semi-colon-separated list of hosts. This flag has an effect only if used
in tandem with `--proxy-server`.

For example:

    app.commandLine.appendSwitch('proxy-bypass-list', '<local>;*.google.com;*foo.com;1.2.3.4:5678')

Will use the proxy server for all hosts except for local addresses
(`localhost`, `127.0.0.1` etc.), `google.com` subdomains, hosts that
contain the suffix `foo.com` and anything at `1.2.3.4:5678`.

--proxy-pac-url=`url`
---------------------

Uses the PAC script at the specified `url`.

--no-proxy-server
-----------------

Don't use a proxy server and always make direct connections. Overrides
any other proxy server flags that are passed.

--host-rules=`rules`
--------------------

A comma-separated list of `rules` that control how hostnames are mapped.

For example:

-   `MAP * 127.0.0.1` Forces all hostnames to be mapped to 127.0.0.1
-   `MAP *.google.com proxy` Forces all google.com subdomains to be
    resolved to "proxy".
-   `MAP test.com [::1]:77` Forces "test.com" to resolve to
    IPv6 loopback. Will also force the port of the resulting socket
    address to be 77.
-   `MAP * baz, EXCLUDE www.google.com` Remaps everything to "baz",
    except for "www.google.com".

These mappings apply to the endpoint host in a net request (the TCP
connect and host resolver in a direct connection, and the `CONNECT` in
an HTTP proxy connection, and the endpoint host in a `SOCKS` proxy
connection).

--host-resolver-rules=`rules`
-----------------------------

Like `--host-rules` but these `rules` only apply to the host resolver.

--ignore-certificate-errors
---------------------------

Ignores certificate related errors.

--ppapi-flash-path=`path`
-------------------------

Sets the `path` of the pepper flash plugin.

--ppapi-flash-version=`version`
-------------------------------

Sets the `version` of the pepper flash plugin.

--log-net-log=`path`
--------------------

Enables net log events to be saved and writes them to `path`.

--ssl-version-fallback-min=`version`
------------------------------------

Sets the minimum SSL/TLS version ("tls1", "tls1.1" or "tls1.2") that TLS
fallback will accept.

--cipher-suite-blacklist=`cipher_suites`
----------------------------------------

Specifies comma-separated list of SSL cipher suites to disable.

--disable-renderer-backgrounding
--------------------------------

Prevents Chromium from lowering the priority of invisible pages'
renderer processes.

This flag is global to all renderer processes, if you only want to
disable throttling in one window, you can take the hack of [playing
silent audio](https://github.com/atom/atom/pull/9485/files).

--enable-logging
----------------

Prints Chromium's logging into console.

This switch can not be used in `app.commandLine.appendSwitch` since it
is parsed earlier than user's app is loaded, but you can set the
`ELECTRON_ENABLE_LOGGING` environment variable to achieve the same
effect.

--v=`log_level`
---------------

Gives the default maximal active V-logging level; 0 is the default.
Normally positive values are used for V-logging levels.

This switch only works when `--enable-logging` is also passed.

--vmodule=`pattern`
-------------------

Gives the per-module maximal V-logging levels to override the value
given by `--v`. E.g. `my_module=2,foo*=3` would change the logging level
for all code in source files `my_module.*` and `foo*.*`.

Any pattern containing a forward or backward slash will be tested
against the whole pathname and not just the module. E.g. `*/foo/bar/*=2`
would change the logging level for all code in the source files under a
`foo/bar` directory.

This switch only works when `--enable-logging` is also passed.

clipboard
=========

The `clipboard` module provides methods to perform copy and paste
operations. The following example shows how to write a string to the
clipboard:

    const clipboard = require('electron').clipboard;
    clipboard.writeText('Example String');

On X Window systems, there is also a selection clipboard. To manipulate
it you need to pass `selection` to each method:

    clipboard.writeText('Example String', 'selection');
    console.log(clipboard.readText('selection'));

Methods
-------

The `clipboard` module has the following methods:

**Note:** Experimental APIs are marked as such and could be removed in
future.

### `clipboard.readText([type])`

-   `type` String (optional)

Returns the content in the clipboard as plain text.

### `clipboard.writeText(text[, type])`

-   `text` String
-   `type` String (optional)

Writes the `text` into the clipboard as plain text.

### `clipboard.readHtml([type])`

-   `type` String (optional)

Returns the content in the clipboard as markup.

### `clipboard.writeHtml(markup[, type])`

-   `markup` String
-   `type` String (optional)

Writes `markup` to the clipboard.

### `clipboard.readImage([type])`

-   `type` String (optional)

Returns the content in the clipboard as a
[NativeImage](native-image.md).

### `clipboard.writeImage(image[, type])`

-   `image` [NativeImage](native-image.md)
-   `type` String (optional)

Writes `image` to the clipboard.

### `clipboard.readRtf([type])`

-   `type` String (optional)

Returns the content in the clipboard as RTF.

### `clipboard.writeRtf(text[, type])`

-   `text` String
-   `type` String (optional)

Writes the `text` into the clipboard in RTF.

### `clipboard.clear([type])`

-   `type` String (optional)

Clears the clipboard content.

### `clipboard.availableFormats([type])`

-   `type` String (optional)

Returns an array of supported formats for the clipboard `type`.

### `clipboard.has(data[, type])` *Experimental*

-   `data` String
-   `type` String (optional)

Returns whether the clipboard supports the format of specified `data`.

    console.log(clipboard.has('<p>selection</p>'));

### `clipboard.read(data[, type])` *Experimental*

-   `data` String
-   `type` String (optional)

Reads `data` from the clipboard.

### `clipboard.write(data[, type])`

-   `data` Object
    -   `text` String
    -   `html` String
    -   `image` [NativeImage](native-image.md)
-   `type` String (optional)

&lt;!-- --&gt;

    clipboard.write({text: 'test', html: "<b>test</b>"});

Writes `data` to the clipboard.

contentTracing
==============

The `content-tracing` module is used to collect tracing data generated
by the underlying Chromium content module. This module does not include
a web interface so you need to open `chrome://tracing/` in a Chrome
browser and load the generated file to view the result.

    const contentTracing = require('electron').contentTracing;

    const options = {
      categoryFilter: '*',
      traceOptions: 'record-until-full,enable-sampling'
    }

    contentTracing.startRecording(options, function() {
      console.log('Tracing started');

      setTimeout(function() {
        contentTracing.stopRecording('', function(path) {
          console.log('Tracing data recorded to ' + path);
        });
      }, 5000);
    });

Methods
-------

The `content-tracing` module has the following methods:

### `contentTracing.getCategories(callback)`

-   `callback` Function

Get a set of category groups. The category groups can change as new code
paths are reached.

Once all child processes have acknowledged the `getCategories` request
the `callback` is invoked with an array of category groups.

### `contentTracing.startRecording(options, callback)`

-   `options` Object
    -   `categoryFilter` String
    -   `traceOptions` String
-   `callback` Function

Start recording on all processes.

Recording begins immediately locally and asynchronously on child
processes as soon as they receive the EnableRecording request. The
`callback` will be called once all child processes have acknowledged the
`startRecording` request.

`categoryFilter` is a filter to control what category groups should be
traced. A filter can have an optional `-` prefix to exclude category
groups that contain a matching category. Having both included and
excluded category patterns in the same list is not supported.

Examples:

-   `test_MyTest*`,
-   `test_MyTest*,test_OtherStuff`,
-   `"-excluded_category1,-excluded_category2`

`traceOptions` controls what kind of tracing is enabled, it is a
comma-delimited list. Possible options are:

-   `record-until-full`
-   `record-continuously`
-   `trace-to-console`
-   `enable-sampling`
-   `enable-systrace`

The first 3 options are trace recoding modes and hence mutually
exclusive. If more than one trace recording modes appear in the
`traceOptions` string, the last one takes precedence. If none of the
trace recording modes are specified, recording mode is
`record-until-full`.

The trace option will first be reset to the default option
(`record_mode` set to `record-until-full`, `enable_sampling` and
`enable_systrace` set to `false`) before options parsed from
`traceOptions` are applied on it.

### `contentTracing.stopRecording(resultFilePath, callback)`

-   `resultFilePath` String
-   `callback` Function

Stop recording on all processes.

Child processes typically cache trace data and only rarely flush and
send trace data back to the main process. This helps to minimize the
runtime overhead of tracing since sending trace data over IPC can be an
expensive operation. So, to end tracing, we must asynchronously ask all
child processes to flush any pending trace data.

Once all child processes have acknowledged the `stopRecording` request,
`callback` will be called with a file that contains the traced data.

Trace data will be written into `resultFilePath` if it is not empty or
into a temporary file. The actual file path will be passed to `callback`
if it's not `null`.

### `contentTracing.startMonitoring(options, callback)`

-   `options` Object
    -   `categoryFilter` String
    -   `traceOptions` String
-   `callback` Function

Start monitoring on all processes.

Monitoring begins immediately locally and asynchronously on child
processes as soon as they receive the `startMonitoring` request.

Once all child processes have acknowledged the `startMonitoring` request
the `callback` will be called.

### `contentTracing.stopMonitoring(callback)`

-   `callback` Function

Stop monitoring on all processes.

Once all child processes have acknowledged the `stopMonitoring` request
the `callback` is called.

### `contentTracing.captureMonitoringSnapshot(resultFilePath, callback)`

-   `resultFilePath` String
-   `callback` Function

Get the current monitoring traced data.

Child processes typically cache trace data and only rarely flush and
send trace data back to the main process. This is because it may be an
expensive operation to send the trace data over IPC and we would like to
avoid unneeded runtime overhead from tracing. So, to end tracing, we
must asynchronously ask all child processes to flush any pending trace
data.

Once all child processes have acknowledged the
`captureMonitoringSnapshot` request the `callback` will be called with a
file that contains the traced data.

### `contentTracing.getTraceBufferUsage(callback)`

-   `callback` Function

Get the maximum usage across processes of trace buffer as a percentage
of the full state. When the TraceBufferUsage value is determined the
`callback` is called.

### `contentTracing.setWatchEvent(categoryName, eventName, callback)`

-   `categoryName` String
-   `eventName` String
-   `callback` Function

`callback` will be called every time the given event occurs on any
process.

### `contentTracing.cancelWatchEvent()`

Cancel the watch event. This may lead to a race condition with the watch
event callback if tracing is enabled.

crashReporter
=============

The `crash-reporter` module enables sending your app's crash reports.

The following is an example of automatically submitting a crash report
to a remote server:

    const crashReporter = require('electron').crashReporter;

    crashReporter.start({
      productName: 'YourName',
      companyName: 'YourCompany',
      submitURL: 'https://your-domain.com/url-to-submit',
      autoSubmit: true
    });

For setting up a server to accept and process crash reports, you can use
following projects:

-   [socorro](https://github.com/mozilla/socorro)
-   [mini-breakpad-server](https://github.com/atom/mini-breakpad-server)

Methods
-------

The `crash-reporter` module has the following methods:

### `crashReporter.start(options)`

-   `options` Object
    -   `companyName` String
    -   `submitURL` String - URL that crash reports will be sent to
        as POST.
    -   `productName` String (optional) - Default is `Electron`.
    -   `autoSubmit` Boolean - Send the crash report without
        user interaction. Default is `true`.
    -   `ignoreSystemCrashHandler` Boolean - Default is `false`.
    -   `extra` Object - An object you can define that will be sent
        along with the report. Only string properties are sent
        correctly, Nested objects are not supported.

You are required to call this method before using other `crashReporter`
APIs.

**Note:** On OS X, Electron uses a new `crashpad` client, which is
different from `breakpad` on Windows and Linux. To enable the crash
collection feature, you are required to call the `crashReporter.start`
API to initialize `crashpad` in the main process and in each renderer
process from which you wish to collect crash reports.

### `crashReporter.getLastCrashReport()`

Returns the date and ID of the last crash report. If no crash reports
have been sent or the crash reporter has not been started, `null` is
returned.

### `crashReporter.getUploadedReports()`

Returns all uploaded crash reports. Each report contains the date and
uploaded ID.

crash-reporter Payload
----------------------

The crash reporter will send the following data to the `submitURL` as a
`multipart/form-data` `POST`:

-   `ver` String - The version of Electron.
-   `platform` String - e.g. 'win32'.
-   `process_type` String - e.g. 'renderer'.
-   `guid` String - e.g. '5e1286fc-da97-479e-918b-6bfb0c3d1c72'
-   `_version` String - The version in `package.json`.
-   `_productName` String - The product name in the `crashReporter`
    `options` object.
-   `prod` String - Name of the underlying product. In this
    case Electron.
-   `_companyName` String - The company name in the `crashReporter`
    `options` object.
-   `upload_file_minidump` File - The crash report in the format of
    `minidump`.
-   All level one properties of the `extra` object in the
    `crashReporter`. `options` object

desktopCapturer
===============

The `desktopCapturer` module can be used to get available sources that
can be used to be captured with `getUserMedia`.

    // In the renderer process.
    var desktopCapturer = require('electron').desktopCapturer;

    desktopCapturer.getSources({types: ['window', 'screen']}, function(error, sources) {
      if (error) throw error;
      for (var i = 0; i < sources.length; ++i) {
        if (sources[i].name == "Electron") {
          navigator.webkitGetUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: sources[i].id,
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720
              }
            }
          }, gotStream, getUserMediaError);
          return;
        }
      }
    });

    function gotStream(stream) {
      document.querySelector('video').src = URL.createObjectURL(stream);
    }

    function getUserMediaError(e) {
      console.log('getUserMediaError');
    }

When creating a constraints object for the
`navigator.webkitGetUserMedia` call, if you are using a source from
`desktopCapturer` your `chromeMediaSource` must be set to `"desktop"`
and your `audio` must be set to `false`.

If you wish to capture the audio and video from the entire desktop you
can set `chromeMediaSource` to `"screen"` and `audio` to `true`. When
using this method you cannot specify a `chromeMediaSourceId`.

Methods
-------

The `desktopCapturer` module has the following methods:

### `desktopCapturer.getSources(options, callback)`

-   `options` Object
    -   `types` Array - An array of String that lists the types of
        desktop sources to be captured, available types are `screen` and
        `window`.
    -   `thumbnailSize` Object (optional) - The suggested size that
        thumbnail should be scaled, it is `{width: 150, height: 150}`
        by default.
-   `callback` Function

Starts a request to get all desktop sources, `callback` will be called
with `callback(error, sources)` when the request is completed.

The `sources` is an array of `Source` objects, each `Source` represents
a captured screen or individual window, and has following properties:

-   `id` String - The id of the captured window or screen used in
    `navigator.webkitGetUserMedia`. The format looks like `window:XX` or
    `screen:XX` where `XX` is a random generated number.
-   `name` String - The described name of the capturing screen
    or window. If the source is a screen, the name will be
    `Entire Screen` or `Screen <index>`; if it is a window, the name
    will be the window's title.
-   `thumbnail` [NativeImage](NativeImage.md) - A thumbnail image.

**Note:** There is no guarantee that the size of `source.thumbnail` is
always the same as the `thumnbailSize` in `options`. It also depends on
the scale of the screen or window.

dialog
======

The `dialog` module provides APIs to show native system dialogs, such as
opening files or alerting, so web applications can deliver the same user
experience as native applications.

An example of showing a dialog to select multiple files and directories:

    var win = ...;  // BrowserWindow in which to show the dialog
    const dialog = require('electron').dialog;
    console.log(dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]}));

The Dialog is opened from Electron's main thread. If you want to use the
dialog object from a renderer process, remember to access it using the
remote:

    const dialog = require('electron').remote.dialog;

**Note for OS X**: If you want to present dialogs as sheets, the only
thing you have to do is provide a `BrowserWindow` reference in the
`browserWindow` parameter.

Methods
-------

The `dialog` module has the following methods:

### `dialog.showOpenDialog([browserWindow, ]options[, callback])`

-   `browserWindow` BrowserWindow (optional)
-   `options` Object
    -   `title` String
    -   `defaultPath` String
    -   `filters` Array
    -   `properties` Array - Contains which features the dialog should
        use, can contain `openFile`, `openDirectory`, `multiSelections`
        and `createDirectory`
-   `callback` Function (optional)

On success this method returns an array of file paths chosen by the
user, otherwise it returns `undefined`.

The `filters` specifies an array of file types that can be displayed or
selected when you want to limit the user to a specific type. For
example:

    {
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
        { name: 'Custom File Type', extensions: ['as'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    }

The `extensions` array should contain extensions without wildcards or
dots (e.g. `'png'` is good but `'.png'` and `'*.png'` are bad). To show
all files, use the `'*'` wildcard (no other wildcard is supported).

If a `callback` is passed, the API call will be asynchronous and the
result will be passed via `callback(filenames)`

**Note:** On Windows and Linux an open dialog can not be both a file
selector and a directory selector, so if you set `properties` to
`['openFile', 'openDirectory']` on these platforms, a directory selector
will be shown.

### `dialog.showSaveDialog([browserWindow, ]options[, callback])`

-   `browserWindow` BrowserWindow (optional)
-   `options` Object
    -   `title` String
    -   `defaultPath` String
    -   `filters` Array
-   `callback` Function (optional)

On success this method returns the path of the file chosen by the user,
otherwise it returns `undefined`.

The `filters` specifies an array of file types that can be displayed,
see `dialog.showOpenDialog` for an example.

If a `callback` is passed, the API call will be asynchronous and the
result will be passed via `callback(filename)`

### `dialog.showMessageBox([browserWindow, ]options[, callback])`

-   `browserWindow` BrowserWindow (optional)
-   `options` Object
    -   `type` String - Can be `"none"`, `"info"`, `"error"`,
        `"question"` or `"warning"`. On Windows, "question" displays the
        same icon as "info", unless you set an icon using the
        "icon" option.
    -   `buttons` Array - Array of texts for buttons.
    -   `defaultId` Integer - Index of the button in the buttons array
        which will be selected by default when the message box opens.
    -   `title` String - Title of the message box, some platforms will
        not show it.
    -   `message` String - Content of the message box.
    -   `detail` String - Extra information of the message.
    -   `icon` [NativeImage](native-image.md)
    -   `cancelId` Integer - The value will be returned when user
        cancels the dialog instead of clicking the buttons of
        the dialog. By default it is the index of the buttons that have
        "cancel" or "no" as label, or 0 if there is no such buttons. On
        OS X and Windows the index of "Cancel" button will always be
        used as `cancelId`, not matter whether it is already specified.
    -   `noLink` Boolean - On Windows Electron will try to figure out
        which one of the `buttons` are common buttons (like "Cancel" or
        "Yes"), and show the others as command links in the dialog. This
        can make the dialog appear in the style of modern Windows apps.
        If you don't like this behavior, you can set `noLink` to `true`.
-   `callback` Function

Shows a message box, it will block the process until the message box is
closed. It returns the index of the clicked button.

If a `callback` is passed, the API call will be asynchronous and the
result will be passed via `callback(response)`.

### `dialog.showErrorBox(title, content)`

Displays a modal dialog that shows an error message.

This API can be called safely before the `ready` event the `app` module
emits, it is usually used to report errors in early stage of startup. If
called before the app `ready`event on Linux, the message will be emitted
to stderr, and no GUI dialog will appear.

DownloadItem
============

`DownloadItem` is an EventEmitter represents a download item in
Electron. It is used in `will-download` event of `Session` module, and
allows users to control the download item.

    // In the main process.
    win.webContents.session.on('will-download', function(event, item, webContents) {
      // Set the save path, making Electron not to prompt a save dialog.
      item.setSavePath('/tmp/save.pdf');
      console.log(item.getMimeType());
      console.log(item.getFilename());
      console.log(item.getTotalBytes());
      item.on('updated', function() {
        console.log('Received bytes: ' + item.getReceivedBytes());
      });
      item.on('done', function(e, state) {
        if (state == "completed") {
          console.log("Download successfully");
        } else {
          console.log("Download is cancelled or interrupted that can't be resumed");
        }
      });

Events
------

### Event: 'updated'

Emits when the `downloadItem` gets updated.

### Event: 'done'

-   `event` Event
-   `state` String
    -   `completed` - The download completed successfully.
    -   `cancelled` - The download has been cancelled.
    -   `interrupted` - An error broke the connection with the
        file server.

Emits when the download is in a terminal state. This includes a
completed download, a cancelled download(via `downloadItem.cancel()`),
and interrupted download that can't be resumed.

Methods
-------

The `downloadItem` object has the following methods:

### `downloadItem.setSavePath(path)`

-   `path` String - Set the save file path of the download item.

The API is only available in session's `will-download` callback
function. If user doesn't set the save path via the API, Electron will
use the original routine to determine the save path(Usually prompts a
save dialog).

### `downloadItem.pause()`

Pauses the download.

### `downloadItem.resume()`

Resumes the download that has been paused.

### `downloadItem.cancel()`

Cancels the download operation.

### `downloadItem.getURL()`

Returns a `String` represents the origin url where the item is
downloaded from.

### `downloadItem.getMimeType()`

Returns a `String` represents the mime type.

### `downloadItem.hasUserGesture()`

Returns a `Boolean` indicates whether the download has user gesture.

### `downloadItem.getFilename()`

Returns a `String` represents the file name of the download item.

**Note:** The file name is not always the same as the actual one saved
in local disk. If user changes the file name in a prompted download
saving dialog, the actual name of saved file will be different.

### `downloadItem.getTotalBytes()`

Returns a `Integer` represents the total size in bytes of the download
item. If the size is unknown, it returns 0.

### `downloadItem.getReceivedBytes()`

Returns a `Integer` represents the received bytes of the download item.

### `downloadItem.getContentDisposition()`

Returns a `String` represents the Content-Disposition field from the
response header.

Environment variables
=====================

Some behaviors of Electron are controlled by environment variables,
because they are initialized earlier than command line and the app's
code.

Examples on POSIX shells:

    $ export ELECTRON_ENABLE_LOGGING=true
    $ electron

on Windows console:

    > set ELECTRON_ENABLE_LOGGING=true
    > electron

`ELECTRON_RUN_AS_NODE`
----------------------

Starts the process as a normal Node.js process.

`ELECTRON_ENABLE_LOGGING`
-------------------------

Prints Chrome's internal logging to console.

`ELECTRON_LOG_ASAR_READS`
-------------------------

When Electron reads from an ASAR file, log the read offset and file path
to the system `tmpdir`. The resulting file can be provided to the ASAR
module to optimize file ordering.

`ELECTRON_ENABLE_STACK_DUMPING`
-------------------------------

When Electron crashed, prints the stack trace to console.

This environment variable will not work if `crashReporter` is started.

`ELECTRON_DEFAULT_ERROR_MODE` *Windows*
---------------------------------------

Shows Windows's crash dialog when Electron crashed.

This environment variable will not work if `crashReporter` is started.

`ELECTRON_NO_ATTACH_CONSOLE` *Windows*
--------------------------------------

Don't attach to current console session.

`ELECTRON_FORCE_WINDOW_MENU_BAR` *Linux*
----------------------------------------

Don't use global menu bar on Linux.

`ELECTRON_HIDE_INTERNAL_MODULES`
--------------------------------

Turns off compatibility mode for old built-in modules like
`require('ipc')`.

`File` object
=============

The DOM's File interface provides abstraction around native files in
order to let users work on native files directly with the HTML5 file
API. Electron has added a `path` attribute to the `File` interface which
exposes the file's real path on filesystem.

Example on getting a real path from a dragged-onto-the-app file:

    <div id="holder">
      Drag your file here
    </div>

    <script>
      var holder = document.getElementById('holder');
      holder.ondragover = function () {
        return false;
      };
      holder.ondragleave = holder.ondragend = function () {
        return false;
      };
      holder.ondrop = function (e) {
        e.preventDefault();
        var file = e.dataTransfer.files[0];
        console.log('File you dragged here is', file.path);
        return false;
      };
    </script>

Frameless Window
================

A frameless window is a window that has no
[chrome](https://developer.mozilla.org/en-US/docs/Glossary/Chrome), the
parts of the window, like toolbars, that are not a part of the web page.
These are options on the [`BrowserWindow`](browser-window.md) class.

Create a frameless window
-------------------------

To create a frameless window, you need to set `frame` to `false` in
[BrowserWindow](browser-window.md)'s `options`:

    const BrowserWindow = require('electron').BrowserWindow;
    var win = new BrowserWindow({ width: 800, height: 600, frame: false });

### Alternatives on OS X

On Mac OS X 10.10 Yosemite and newer, there's an alternative way to
specify a chromeless window. Instead of setting `frame` to `false` which
disables both the titlebar and window controls, you may want to have the
title bar hidden and your content extend to the full window size, yet
still preserve the window controls ("traffic lights") for standard
window actions. You can do so by specifying the new `titleBarStyle`
option:

    var win = new BrowserWindow({ 'titleBarStyle': 'hidden' });

Transparent window
------------------

By setting the `transparent` option to `true`, you can also make the
frameless window transparent:

    var win = new BrowserWindow({ transparent: true, frame: false });

### Limitations

-   You can not click through the transparent area. We are going to
    introduce an API to set window shape to solve this, see [our
    issue](https://github.com/electron/electron/issues/1335)
    for details.
-   Transparent windows are not resizable. Setting `resizable` to `true`
    may make a transparent window stop working on some platforms.
-   The `blur` filter only applies to the web page, so there is no way
    to apply blur effect to the content below the window (i.e. other
    applications open on the user's system).
-   On Windows operation systems, transparent windows will not work when
    DWM is disabled.
-   On Linux users have to put
    `--enable-transparent-visuals --disable-gpu` in the command line to
    disable GPU and allow ARGB to make transparent window, this is
    caused by an upstream bug that [alpha channel doesn't work on some
    NVidia
    drivers](https://code.google.com/p/chromium/issues/detail?id=369209)
    on Linux.
-   On Mac the native window shadow will not be shown on a
    transparent window.

Draggable region
----------------

By default, the frameless window is non-draggable. Apps need to specify
`-webkit-app-region: drag` in CSS to tell Electron which regions are
draggable (like the OS's standard titlebar), and apps can also use
`-webkit-app-region: no-drag` to exclude the non-draggable area from the
draggable region. Note that only rectangular shapes are currently
supported.

To make the whole window draggable, you can add
`-webkit-app-region: drag` as `body`'s style:

    <body style="-webkit-app-region: drag">
    </body>

And note that if you have made the whole window draggable, you must also
mark buttons as non-draggable, otherwise it would be impossible for
users to click on them:

    button {
      -webkit-app-region: no-drag;
    }

If you're setting just a custom titlebar as draggable, you also need to
make all buttons in titlebar non-draggable.

Text selection
--------------

In a frameless window the dragging behaviour may conflict with selecting
text. For example, when you drag the titlebar you may accidentally
select the text on the titlebar. To prevent this, you need to disable
text selection within a draggable area like this:

    .titlebar {
      -webkit-user-select: none;
      -webkit-app-region: drag;
    }

Context menu
------------

On some platforms, the draggable area will be treated as a non-client
frame, so when you right click on it a system menu will pop up. To make
the context menu behave correctly on all platforms you should never use
a custom context menu on draggable areas.

globalShortcut
==============

The `globalShortcut` module can register/unregister a global keyboard
shortcut with the operating system so that you can customize the
operations for various shortcuts.

**Note:** The shortcut is global; it will work even if the app does not
have the keyboard focus. You should not use this module until the
`ready` event of the app module is emitted.

    const electron = require('electron');
    const app = electron.app;
    const globalShortcut = electron.globalShortcut;

    app.on('ready', function() {
      // Register a 'CommandOrControl+X' shortcut listener.
      var ret = globalShortcut.register('CommandOrControl+X', function() {
        console.log('CommandOrControl+X is pressed');
      });

      if (!ret) {
        console.log('registration failed');
      }

      // Check whether a shortcut is registered.
      console.log(globalShortcut.isRegistered('CommandOrControl+X'));
    });

    app.on('will-quit', function() {
      // Unregister a shortcut.
      globalShortcut.unregister('CommandOrControl+X');

      // Unregister all shortcuts.
      globalShortcut.unregisterAll();
    });

Methods
-------

The `globalShortcut` module has the following methods:

### `globalShortcut.register(accelerator, callback)`

-   `accelerator` [Accelerator](accelerator.md)
-   `callback` Function

Registers a global shortcut of `accelerator`. The `callback` is called
when the registered shortcut is pressed by the user.

When the accelerator is already taken by other applications, this call
will silently fail. This behavior is intended by operating systems,
since they don't want applications to fight for global shortcuts.

### `globalShortcut.isRegistered(accelerator)`

-   `accelerator` [Accelerator](accelerator.md)

Returns whether this application has registered `accelerator`.

When the accelerator is already taken by other applications, this call
will still return `false`. This behavior is intended by operating
systems, since they don't want applications to fight for global
shortcuts.

### `globalShortcut.unregister(accelerator)`

-   `accelerator` [Accelerator](accelerator.md)

Unregisters the global shortcut of `accelerator`.

### `globalShortcut.unregisterAll()`

Unregisters all of the global shortcuts.

ipcMain
=======

The `ipcMain` module is an instance of the
[EventEmitter](https://nodejs.org/api/events.html) class. When used in
the main process, it handles asynchronous and synchronous messages sent
from a renderer process (web page). Messages sent from a renderer will
be emitted to this module.

Sending Messages
----------------

It is also possible to send messages from the main process to the
renderer process, see
[webContents.send](web-contents.md#webcontentssendchannel-arg1-arg2-)
for more information.

-   When sending a message, the event name is the `channel`.
-   To reply a synchronous message, you need to set `event.returnValue`.
-   To send an asynchronous back to the sender, you can use
    `event.sender.send(...)`.

An example of sending and handling messages between the render and main
processes:

    // In main process.
    const ipcMain = require('electron').ipcMain;
    ipcMain.on('asynchronous-message', function(event, arg) {
      console.log(arg);  // prints "ping"
      event.sender.send('asynchronous-reply', 'pong');
    });

    ipcMain.on('synchronous-message', function(event, arg) {
      console.log(arg);  // prints "ping"
      event.returnValue = 'pong';
    });

    // In renderer process (web page).
    const ipcRenderer = require('electron').ipcRenderer;
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

    ipcRenderer.on('asynchronous-reply', function(event, arg) {
      console.log(arg); // prints "pong"
    });
    ipcRenderer.send('asynchronous-message', 'ping');

Listening for Messages
----------------------

The `ipcMain` module has the following method to listen for events:

### `ipcMain.on(channel, listener)`

-   `channel` String
-   `listener` Function

Listens to `channel`, when a new message arrives `listener` would be
called with `listener(event, args...)`.

### `ipcMain.once(channel, listener)`

-   `channel` String
-   `listener` Function

Adds a one time `listener` function for the event. This `listener` is
invoked only the next time a message is sent to `channel`, after which
it is removed.

### `ipcMain.removeListener(channel, listener)`

-   `channel` String
-   `listener` Function

Removes the specified `listener` from the listener array for the
specified `channel`.

### `ipcMain.removeAllListeners([channel])`

-   `channel` String (optional)

Removes all listeners, or those of the specified `channel`.

Event object
------------

The `event` object passed to the `callback` has the following methods:

### `event.returnValue`

Set this to the value to be returned in a synchronous message.

### `event.sender`

Returns the `webContents` that sent the message, you can call
`event.sender.send` to reply to the asynchronous message, see
[webContents.send](web-contents.md#webcontentssendchannel-arg1-arg2-)
for more information.

ipcRenderer
===========

The `ipcRenderer` module is an instance of the
[EventEmitter](https://nodejs.org/api/events.html) class. It provides a
few methods so you can send synchronous and asynchronous messages from
the render process (web page) to the main process. You can also receive
replies from the main process.

See [ipcMain](ipc-main.md) for code examples.

Listening for Messages
----------------------

The `ipcRenderer` module has the following method to listen for events:

### `ipcRenderer.on(channel, listener)`

-   `channel` String
-   `listener` Function

Listens to `channel`, when a new message arrives `listener` would be
called with `listener(event, args...)`.

### `ipcRenderer.once(channel, listener)`

-   `channel` String
-   `listener` Function

Adds a one time `listener` function for the event. This `listener` is
invoked only the next time a message is sent to `channel`, after which
it is removed.

### `ipcRenderer.removeListener(channel, listener)`

-   `channel` String
-   `listener` Function

Removes the specified `listener` from the listener array for the
specified `channel`.

### `ipcRenderer.removeAllListeners([channel])`

-   `channel` String (optional)

Removes all listeners, or those of the specified `channel`.

Sending Messages
----------------

The `ipcRenderer` module has the following methods for sending messages:

### `ipcRenderer.send(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Send a message to the main process asynchronously via `channel`, you can
also send arbitrary arguments. Arguments will be serialized in JSON
internally and hence no functions or prototype chain will be included.

The main process handles it by listening for `channel` with `ipcMain`
module.

### `ipcRenderer.sendSync(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Send a message to the main process synchronously via `channel`, you can
also send arbitrary arguments. Arguments will be serialized in JSON
internally and hence no functions or prototype chain will be included.

The main process handles it by listening for `channel` with `ipcMain`
module, and replies by setting `event.returnValue`.

**Note:** Sending a synchronous message will block the whole renderer
process, unless you know what you are doing you should never use it.

### `ipcRenderer.sendToHost(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Like `ipcRenderer.send` but the event will be sent to the `<webview>`
element in the host page instead of the main process.

MenuItem
========

The `menu-item` module allows you to add items to an application or
context [`menu`](menu.md).

See [`menu`](menu.md) for examples.

Class: MenuItem
---------------

Create a new `MenuItem` with the following method:

### new MenuItem(options)

-   `options` Object
    -   `click` Function - Will be called with
        `click(menuItem, browserWindow)` when the menu item is clicked
    -   `role` String - Define the action of the menu item; when
        specified the `click` property will be ignored
    -   `type` String - Can be `normal`, `separator`, `submenu`,
        `checkbox` or `radio`
    -   `label` String
    -   `sublabel` String
    -   `accelerator` [Accelerator](accelerator.md)
    -   `icon` [NativeImage](native-image.md)
    -   `enabled` Boolean - If false, the menu item will be greyed out
        and unclickable.
    -   `visible` Boolean - If false, the menu item will be
        entirely hidden.
    -   `checked` Boolean - Should only be specified for `checkbox` or
        `radio` type menu items.
    -   `submenu` Menu - Should be specified for `submenu` type
        menu items. If `submenu` is specified, the `type: 'submenu'` can
        be omitted. If the value is not a `Menu` then it will be
        automatically converted to one using `Menu.buildFromTemplate`.
    -   `id` String - Unique within a single menu. If defined then it
        can be used as a reference to this item by the
        position attribute.
    -   `position` String - This field allows fine-grained definition of
        the specific location within a given menu.

It is best to specify `role` for any menu item that matches a standard
role, rather than trying to manually implement the behavior in a `click`
function. The built-in `role` behavior will give the best native
experience.

The `role` property can have following values:

-   `undo`
-   `redo`
-   `cut`
-   `copy`
-   `paste`
-   `selectall`
-   `minimize` - Minimize current window
-   `close` - Close current window

On OS X `role` can also have following additional values:

-   `about` - Map to the `orderFrontStandardAboutPanel` action
-   `hide` - Map to the `hide` action
-   `hideothers` - Map to the `hideOtherApplications` action
-   `unhide` - Map to the `unhideAllApplications` action
-   `front` - Map to the `arrangeInFront` action
-   `window` - The submenu is a "Window" menu
-   `help` - The submenu is a "Help" menu
-   `services` - The submenu is a "Services" menu

Instance Properties
-------------------

The following properties (and no others) can be updated on an existing
`MenuItem`:

-   `enabled` Boolean
-   `visible` Boolean
-   `checked` Boolean

Their meanings are as described above.

A `checkbox` menu item will toggle its `checked` property on and off
when selected. You can add a `click` function to do additional work.

A `radio` menu item will turn on its `checked` property when clicked,
and will turn off that property for all adjacent items in the same menu.
Again, you can add a `click` function for additional behavior.

Menu
====

The `menu` class is used to create native menus that can be used as
application menus and [context
menus](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/PopupGuide/ContextMenus).
This module is a main process module which can be used in a render
process via the `remote` module.

Each menu consists of multiple [menu items](menu-item.md) and each menu
item can have a submenu.

Below is an example of creating a menu dynamically in a web page (render
process) by using the [remote](remote.md) module, and showing it when
the user right clicks the page:

    <!-- index.html -->
    <script>
    const remote = require('electron').remote;
    const Menu = remote.Menu;
    const MenuItem = remote.MenuItem;

    var menu = new Menu();
    menu.append(new MenuItem({ label: 'MenuItem1', click: function() { console.log('item 1 clicked'); } }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));

    window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      menu.popup(remote.getCurrentWindow());
    }, false);
    </script>

An example of creating the application menu in the render process with
the simple template API:

    var template = [
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'CmdOrCtrl+Z',
            role: 'undo'
          },
          {
            label: 'Redo',
            accelerator: 'Shift+CmdOrCtrl+Z',
            role: 'redo'
          },
          {
            type: 'separator'
          },
          {
            label: 'Cut',
            accelerator: 'CmdOrCtrl+X',
            role: 'cut'
          },
          {
            label: 'Copy',
            accelerator: 'CmdOrCtrl+C',
            role: 'copy'
          },
          {
            label: 'Paste',
            accelerator: 'CmdOrCtrl+V',
            role: 'paste'
          },
          {
            label: 'Select All',
            accelerator: 'CmdOrCtrl+A',
            role: 'selectall'
          },
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: function(item, focusedWindow) {
              if (focusedWindow)
                focusedWindow.reload();
            }
          },
          {
            label: 'Toggle Full Screen',
            accelerator: (function() {
              if (process.platform == 'darwin')
                return 'Ctrl+Command+F';
              else
                return 'F11';
            })(),
            click: function(item, focusedWindow) {
              if (focusedWindow)
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
            }
          },
          {
            label: 'Toggle Developer Tools',
            accelerator: (function() {
              if (process.platform == 'darwin')
                return 'Alt+Command+I';
              else
                return 'Ctrl+Shift+I';
            })(),
            click: function(item, focusedWindow) {
              if (focusedWindow)
                focusedWindow.toggleDevTools();
            }
          },
        ]
      },
      {
        label: 'Window',
        role: 'window',
        submenu: [
          {
            label: 'Minimize',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
          },
          {
            label: 'Close',
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
          },
        ]
      },
      {
        label: 'Help',
        role: 'help',
        submenu: [
          {
            label: 'Learn More',
            click: function() { require('electron').shell.openExternal('http://electron.atom.io') }
          },
        ]
      },
    ];

    if (process.platform == 'darwin') {
      var name = require('electron').remote.app.getName();
      template.unshift({
        label: name,
        submenu: [
          {
            label: 'About ' + name,
            role: 'about'
          },
          {
            type: 'separator'
          },
          {
            label: 'Services',
            role: 'services',
            submenu: []
          },
          {
            type: 'separator'
          },
          {
            label: 'Hide ' + name,
            accelerator: 'Command+H',
            role: 'hide'
          },
          {
            label: 'Hide Others',
            accelerator: 'Command+Alt+H',
            role: 'hideothers'
          },
          {
            label: 'Show All',
            role: 'unhide'
          },
          {
            type: 'separator'
          },
          {
            label: 'Quit',
            accelerator: 'Command+Q',
            click: function() { app.quit(); }
          },
        ]
      });
      // Window menu.
      template[3].submenu.push(
        {
          type: 'separator'
        },
        {
          label: 'Bring All to Front',
          role: 'front'
        }
      );
    }

    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

Class: Menu
-----------

### `new Menu()`

Creates a new menu.

Methods
-------

The `menu` class has the following methods:

### `Menu.setApplicationMenu(menu)`

-   `menu` Menu

Sets `menu` as the application menu on OS X. On Windows and Linux, the
`menu` will be set as each window's top menu.

### `Menu.sendActionToFirstResponder(action)` *OS X*

-   `action` String

Sends the `action` to the first responder of application. This is used
for emulating default Cocoa menu behaviors, usually you would just use
the `role` property of `MenuItem`.

See the [OS X Cocoa Event Handling
Guide](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/EventOverview/EventArchitecture/EventArchitecture.html#//apple_ref/doc/uid/10000060i-CH3-SW7)
for more information on OS X's native actions.

### `Menu.buildFromTemplate(template)`

-   `template` Array

Generally, the `template` is just an array of `options` for constructing
a [MenuItem](menu-item.md). The usage can be referenced above.

You can also attach other fields to the element of the `template` and
they will become properties of the constructed menu items.

Instance Methods
----------------

The `menu` object has the following instance methods:

### `menu.popup([browserWindow, x, y, positioningItem])`

-   `browserWindow` BrowserWindow (optional) - Default is `null`.
-   `x` Number (optional) - Default is -1.
-   `y` Number (**required** if `x` is used) - Default is -1.
-   `positioningItem` Number (optional) *OS X* - The index of the menu
    item to be positioned under the mouse cursor at the
    specified coordinates. Default is -1.

Pops up this menu as a context menu in the `browserWindow`. You can
optionally provide a `x, y` coordinate to place the menu at, otherwise
it will be placed at the current mouse cursor position.

### `menu.append(menuItem)`

-   `menuItem` MenuItem

Appends the `menuItem` to the menu.

### `menu.insert(pos, menuItem)`

-   `pos` Integer
-   `menuItem` MenuItem

Inserts the `menuItem` to the `pos` position of the menu.

Instance Properties
-------------------

`menu` objects also have the following properties:

### `menu.items`

Get an array containing the menu's items.

Notes on OS X Application Menu
------------------------------

OS X has a completely different style of application menu from Windows
and Linux, here are some notes on making your app's menu more
native-like.

### Standard Menus

On OS X there are many system defined standard menus, like the
`Services` and `Windows` menus. To make your menu a standard menu, you
should set your menu's `role` to one of following and Electron will
recognize them and make them become standard menus:

-   `window`
-   `help`
-   `services`

### Standard Menu Item Actions

OS X has provided standard actions for some menu items, like
`About xxx`, `Hide xxx`, and `Hide Others`. To set the action of a menu
item to a standard action, you should set the `role` attribute of the
menu item.

### Main Menu's Name

On OS X the label of application menu's first item is always your app's
name, no matter what label you set. To change it you have to change your
app's name by modifying your app bundle's `Info.plist` file. See [About
Information Property List
Files](https://developer.apple.com/library/ios/documentation/general/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html)
for more information.

Setting Menu for Specific Browser Window (*Linux* *Windows*)
------------------------------------------------------------

The [`setMenu`
method](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetmenumenu-linux-windows)
of browser windows can set the menu of certain browser window.

Menu Item Position
------------------

You can make use of `position` and `id` to control how the item will be
placed when building a menu with `Menu.buildFromTemplate`.

The `position` attribute of `MenuItem` has the form `[placement]=[id]`,
where `placement` is one of `before`, `after`, or `endof` and `id` is
the unique ID of an existing item in the menu:

-   `before` - Inserts this item before the id referenced item. If the
    referenced item doesn't exist the item will be inserted at the end
    of the menu.
-   `after` - Inserts this item after id referenced item. If the
    referenced item doesn't exist the item will be inserted at the end
    of the menu.
-   `endof` - Inserts this item at the end of the logical group
    containing the id referenced item (groups are created by
    separator items). If the referenced item doesn't exist, a new
    separator group is created with the given id and this item is
    inserted after that separator.

When an item is positioned, all un-positioned items are inserted after
it until a new item is positioned. So if you want to position a group of
menu items in the same location you only need to specify a position for
the first item.

### Examples

Template:

    [
      {label: '4', id: '4'},
      {label: '5', id: '5'},
      {label: '1', id: '1', position: 'before=4'},
      {label: '2', id: '2'},
      {label: '3', id: '3'}
    ]

Menu:

    - 1
    - 2
    - 3
    - 4
    - 5

Template:

    [
      {label: 'a', position: 'endof=letters'},
      {label: '1', position: 'endof=numbers'},
      {label: 'b', position: 'endof=letters'},
      {label: '2', position: 'endof=numbers'},
      {label: 'c', position: 'endof=letters'},
      {label: '3', position: 'endof=numbers'}
    ]

Menu:

    - ---
    - a
    - b
    - c
    - ---
    - 1
    - 2
    - 3

nativeImage
===========

In Electron, for the APIs that take images, you can pass either file
paths or `nativeImage` instances. An empty image will be used when
`null` is passed.

For example, when creating a tray or setting a window's icon, you can
pass an image file path as a `String`:

    var appIcon = new Tray('/Users/somebody/images/icon.png');
    var window = new BrowserWindow({icon: '/Users/somebody/images/window.png'});

Or read the image from the clipboard which returns a `nativeImage`:

    var image = clipboard.readImage();
    var appIcon = new Tray(image);

Supported Formats
-----------------

Currently `PNG` and `JPEG` image formats are supported. `PNG` is
recommended because of its support for transparency and lossless
compression.

On Windows, you can also load an `ICO` icon from a file path.

High Resolution Image
---------------------

On platforms that have high-DPI support, you can append `@2x` after
image's base filename to mark it as a high resolution image.

For example if `icon.png` is a normal image that has standard
resolution, then `icon@2x.png` will be treated as a high resolution
image that has double DPI density.

If you want to support displays with different DPI densities at the same
time, you can put images with different sizes in the same folder and use
the filename without DPI suffixes. For example:

    images/
    ├── icon.png
    ├── icon@2x.png
    └── icon@3x.png

    var appIcon = new Tray('/Users/somebody/images/icon.png');

Following suffixes for DPI are also supported:

-   `@1x`
-   `@1.25x`
-   `@1.33x`
-   `@1.4x`
-   `@1.5x`
-   `@1.8x`
-   `@2x`
-   `@2.5x`
-   `@3x`
-   `@4x`
-   `@5x`

Template Image
--------------

Template images consist of black and clear colors (and an alpha
channel). Template images are not intended to be used as standalone
images and are usually mixed with other content to create the desired
final appearance.

The most common case is to use template images for a menu bar icon so it
can adapt to both light and dark menu bars.

**Note:** Template image is only supported on OS X.

To mark an image as a template image, its filename should end with the
word `Template`. For example:

-   `xxxTemplate.png`
-   `xxxTemplate@2x.png`

Methods
-------

The `nativeImage` class has the following methods:

### `nativeImage.createEmpty()`

Creates an empty `nativeImage` instance.

### `nativeImage.createFromPath(path)`

-   `path` String

Creates a new `nativeImage` instance from a file located at `path`.

### `nativeImage.createFromBuffer(buffer[, scaleFactor])`

-   `buffer`
    [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer)
-   `scaleFactor` Double (optional)

Creates a new `nativeImage` instance from `buffer`. The default
`scaleFactor` is 1.0.

### `nativeImage.createFromDataURL(dataURL)`

-   `dataURL` String

Creates a new `nativeImage` instance from `dataURL`.

Instance Methods
----------------

The following methods are available on instances of `nativeImage`:

    const nativeImage = require('electron').nativeImage;

    var image = nativeImage.createFromPath('/Users/somebody/images/icon.png');

### `image.toPng()`

Returns a
[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that
contains the image's `PNG` encoded data.

### `image.toJpeg(quality)`

-   `quality` Integer (**required**) - Between 0 - 100.

Returns a
[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that
contains the image's `JPEG` encoded data.

### `image.toDataURL()`

Returns the data URL of the image.

### `image.getNativeHandle()` *OS X*

Returns a
[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that
stores C pointer to underlying native handle of the image. On OS X, a
pointer to `NSImage` instance would be returned.

Notice that the returned pointer is a weak pointer to the underlying
native image instead of a copy, so you *must* ensure that the associated
`nativeImage` instance is kept around.

### `image.isEmpty()`

Returns a boolean whether the image is empty.

### `image.getSize()`

Returns the size of the image.

### `image.setTemplateImage(option)`

-   `option` Boolean

Marks the image as template image.

### `image.isTemplateImage()`

Returns a boolean whether the image is a template image.

powerMonitor
============

The `power-monitor` module is used to monitor power state changes. You
can only use it in the main process. You should not use this module
until the `ready` event of the `app` module is emitted.

For example:

    app.on('ready', function() {
      require('electron').powerMonitor.on('suspend', function() {
        console.log('The system is going to sleep');
      });
    });

Events
------

The `power-monitor` module emits the following events:

### Event: 'suspend'

Emitted when the system is suspending.

### Event: 'resume'

Emitted when system is resuming.

### Event: 'on-ac' *Windows*

Emitted when the system changes to AC power.

### Event: 'on-battery' *Windows*

Emitted when system changes to battery power.

powerSaveBlocker
================

The `powerSaveBlocker` module is used to block the system from entering
low-power (sleep) mode and thus allowing the app to keep the system and
screen active.

For example:

    const powerSaveBlocker = require('electron').powerSaveBlocker;

    var id = powerSaveBlocker.start('prevent-display-sleep');
    console.log(powerSaveBlocker.isStarted(id));

    powerSaveBlocker.stop(id);

Methods
-------

The `powerSaveBlocker` module has the following methods:

### `powerSaveBlocker.start(type)`

-   `type` String - Power save blocker type.
    -   `prevent-app-suspension` - Prevent the application from
        being suspended. Keeps system active but allows screen to be
        turned off. Example use cases: downloading a file or
        playing audio.
    -   `prevent-display-sleep`- Prevent the display from going
        to sleep. Keeps system and screen active. Example use case:
        playing video.

Starts preventing the system from entering lower-power mode. Returns an
integer identifying the power save blocker.

**Note:** `prevent-display-sleep` has higher has precedence over
`prevent-app-suspension`. Only the highest precedence type takes effect.
In other words, `prevent-display-sleep` always takes precedence over
`prevent-app-suspension`.

For example, an API calling A requests for `prevent-app-suspension`, and
another calling B requests for `prevent-display-sleep`.
`prevent-display-sleep` will be used until B stops its request. After
that, `prevent-app-suspension` is used.

### `powerSaveBlocker.stop(id)`

-   `id` Integer - The power save blocker id returned by
    `powerSaveBlocker.start`.

Stops the specified power save blocker.

### `powerSaveBlocker.isStarted(id)`

-   `id` Integer - The power save blocker id returned by
    `powerSaveBlocker.start`.

Returns a boolean whether the corresponding `powerSaveBlocker` has
started.

process
=======

The `process` object in Electron has the following differences from the
one in upstream node:

-   `process.type` String - Process's type, can be `browser` (i.e.
    main process) or `renderer`.
-   `process.versions['electron']` String - Version of Electron.
-   `process.versions['chrome']` String - Version of Chromium.
-   `process.resourcesPath` String - Path to JavaScript source code.
-   `process.mas` Boolean - For Mac App Store build, this value is
    `true`, for other builds it is `undefined`.

Events
------

### Event: 'loaded'

Emitted when Electron has loaded its internal initialization script and
is beginning to load the web page or the main script.

It can be used by the preload script to add removed Node global symbols
back to the global scope when node integration is turned off:

    // preload.js
    var _setImmediate = setImmediate;
    var _clearImmediate = clearImmediate;
    process.once('loaded', function() {
      global.setImmediate = _setImmediate;
      global.clearImmediate = _clearImmediate;
    });

Properties
----------

### `process.noAsar`

Setting this to `true` can disable the support for `asar` archives in
Node's built-in modules.

Methods
-------

The `process` object has the following method:

### `process.hang()`

Causes the main thread of the current process hang.

### `process.setFdLimit(maxDescriptors)` *OS X* *Linux*

-   `maxDescriptors` Integer

Sets the file descriptor soft limit to `maxDescriptors` or the OS hard
limit, whichever is lower for the current process.

protocol
========

The `protocol` module can register a custom protocol or intercept an
existing protocol.

An example of implementing a protocol that has the same effect as the
`file://` protocol:

    const electron = require('electron');
    const app = electron.app;
    const path = require('path');

    app.on('ready', function() {
        var protocol = electron.protocol;
        protocol.registerFileProtocol('atom', function(request, callback) {
          var url = request.url.substr(7);
          callback({path: path.normalize(__dirname + '/' + url)});
        }, function (error) {
          if (error)
            console.error('Failed to register protocol')
        });
    });

**Note:** This module can only be used after the `ready` event in the
`app` module is emitted.

Methods
-------

The `protocol` module has the following methods:

### `protocol.registerStandardSchemes(schemes)`

-   `schemes` Array - Custom schemes to be registered as
    standard schemes.

A standard `scheme` adheres to what RFC 3986 calls [generic URI
syntax](https://tools.ietf.org/html/rfc3986#section-3). This includes
`file:` and `filesystem:`.

### `protocol.registerServiceWorkerSchemes(schemes)`

-   `schemes` Array - Custom schemes to be registered to handle
    service workers.

### `protocol.registerFileProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Registers a protocol of `scheme` that will send the file as a response.
The `handler` will be called with `handler(request, callback)` when a
`request` is going to be created with `scheme`. `completion` will be
called with `completion(null)` when `scheme` is successfully registered
or `completion(error)` when failed.

-   `request` Object
    -   `url` String
    -   `referrer` String
    -   `method` String
    -   `uploadData` Array (optional)
-   `callback` Function

The `uploadData` is an array of `data` objects:

-   `data` Object
    -   `bytes` Buffer - Content being sent.
    -   `file` String - Path of file being uploaded.

To handle the `request`, the `callback` should be called with either the
file's path or an object that has a `path` property, e.g.
`callback(filePath)` or `callback({path: filePath})`.

When `callback` is called with nothing, a number, or an object that has
an `error` property, the `request` will fail with the `error` number you
specified. For the available error numbers you can use, please see the
[net error
list](https://code.google.com/p/chromium/codesearch#chromium/src/net/base/net_error_list.h).

By default the `scheme` is treated like `http:`, which is parsed
differently than protocols that follow the "generic URI syntax" like
`file:`, so you probably want to call `protocol.registerStandardSchemes`
to have your scheme treated as a standard scheme.

### `protocol.registerBufferProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Registers a protocol of `scheme` that will send a `Buffer` as a
response.

The usage is the same with `registerFileProtocol`, except that the
`callback` should be called with either a `Buffer` object or an object
that has the `data`, `mimeType`, and `charset` properties.

Example:

    protocol.registerBufferProtocol('atom', function(request, callback) {
      callback({mimeType: 'text/html', data: new Buffer('<h5>Response</h5>')});
    }, function (error) {
      if (error)
        console.error('Failed to register protocol')
    });

### `protocol.registerStringProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Registers a protocol of `scheme` that will send a `String` as a
response.

The usage is the same with `registerFileProtocol`, except that the
`callback` should be called with either a `String` or an object that has
the `data`, `mimeType`, and `charset` properties.

### `protocol.registerHttpProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Registers a protocol of `scheme` that will send an HTTP request as a
response.

The usage is the same with `registerFileProtocol`, except that the
`callback` should be called with a `redirectRequest` object that has the
`url`, `method`, `referrer`, `uploadData` and `session` properties.

-   `redirectRequest` Object
    -   `url` String
    -   `method` String
    -   `session` Object (optional)
    -   `uploadData` Object (optional)

By default the HTTP request will reuse the current session. If you want
the request to have a different session you should set `session` to
`null`.

For POST requests the `uploadData` object must be provided.

-   `uploadData` object
    -   `contentType` String - MIME type of the content.
    -   `data` String - Content to be sent.

### `protocol.unregisterProtocol(scheme[, completion])`

-   `scheme` String
-   `completion` Function (optional)

Unregisters the custom protocol of `scheme`.

### `protocol.isProtocolHandled(scheme, callback)`

-   `scheme` String
-   `callback` Function

The `callback` will be called with a boolean that indicates whether
there is already a handler for `scheme`.

### `protocol.interceptFileProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Intercepts `scheme` protocol and uses `handler` as the protocol's new
handler which sends a file as a response.

### `protocol.interceptStringProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Intercepts `scheme` protocol and uses `handler` as the protocol's new
handler which sends a `String` as a response.

### `protocol.interceptBufferProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Intercepts `scheme` protocol and uses `handler` as the protocol's new
handler which sends a `Buffer` as a response.

### `protocol.interceptHttpProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Intercepts `scheme` protocol and uses `handler` as the protocol's new
handler which sends a new HTTP request as a response.

### `protocol.uninterceptProtocol(scheme[, completion])`

-   `scheme` String
-   `completion` Function

Remove the interceptor installed for `scheme` and restore its original
handler.

remote
======

The `remote` module provides a simple way to do inter-process
communication (IPC) between the renderer process (web page) and the main
process.

In Electron, GUI-related modules (such as `dialog`, `menu` etc.) are
only available in the main process, not in the renderer process. In
order to use them from the renderer process, the `ipc` module is
necessary to send inter-process messages to the main process. With the
`remote` module, you can invoke methods of the main process object
without explicitly sending inter-process messages, similar to Java's
[RMI](http://en.wikipedia.org/wiki/Java_remote_method_invocation). An
example of creating a browser window from a renderer process:

    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL('https://github.com');

**Note:** for the reverse (access the renderer process from the main
process), you can use
[webContents.executeJavascript](web-contents.md#webcontentsexecutejavascriptcode-usergesture).

Remote Objects
--------------

Each object (including functions) returned by the `remote` module
represents an object in the main process (we call it a remote object or
remote function). When you invoke methods of a remote object, call a
remote function, or create a new object with the remote constructor
(function), you are actually sending synchronous inter-process messages.

In the example above, both `BrowserWindow` and `win` were remote objects
and `new BrowserWindow` didn't create a `BrowserWindow` object in the
renderer process. Instead, it created a `BrowserWindow` object in the
main process and returned the corresponding remote object in the
renderer process, namely the `win` object.

Please note that only [enumerable
properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
are accessible via remote.

Lifetime of Remote Objects
--------------------------

Electron makes sure that as long as the remote object in the renderer
process lives (in other words, has not been garbage collected), the
corresponding object in the main process will not be released. When the
remote object has been garbage collected, the corresponding object in
the main process will be dereferenced.

If the remote object is leaked in the renderer process (e.g. stored in a
map but never freed), the corresponding object in the main process will
also be leaked, so you should be very careful not to leak remote
objects.

Primary value types like strings and numbers, however, are sent by copy.

Passing callbacks to the main process
-------------------------------------

Code in the main process can accept callbacks from the renderer - for
instance the `remote` module - but you should be extremely careful when
using this feature.

First, in order to avoid deadlocks, the callbacks passed to the main
process are called asynchronously. You should not expect the main
process to get the return value of the passed callbacks.

For instance you can't use a function from the renderer process in an
`Array.map` called in the main process:

    // main process mapNumbers.js
    exports.withRendererCallback = function(mapper) {
      return [1,2,3].map(mapper);
    }

    exports.withLocalCallback = function() {
      return exports.mapNumbers(function(x) {
        return x + 1;
      });
    }

    // renderer process
    var mapNumbers = require("remote").require("./mapNumbers");

    var withRendererCb = mapNumbers.withRendererCallback(function(x) {
      return x + 1;
    })

    var withLocalCb = mapNumbers.withLocalCallback()

    console.log(withRendererCb, withLocalCb) // [true, true, true], [2, 3, 4]

As you can see, the renderer callback's synchronous return value was not
as expected, and didn't match the return value of an identical callback
that lives in the main process.

Second, the callbacks passed to the main process will persist until the
main process garbage-collects them.

For example, the following code seems innocent at first glance. It
installs a callback for the `close` event on a remote object:

    remote.getCurrentWindow().on('close', function() {
      // blabla...
    });

But remember the callback is referenced by the main process until you
explicitly uninstall it. If you do not, each time you reload your window
the callback will be installed again, leaking one callback for each
restart.

To make things worse, since the context of previously installed
callbacks has been released, exceptions will be raised in the main
process when the `close` event is emitted.

To avoid this problem, ensure you clean up any references to renderer
callbacks passed to the main process. This involves cleaning up event
handlers, or ensuring the main process is explicitly told to deference
callbacks that came from a renderer process that is exiting.

Accessing built-in modules in the main process
----------------------------------------------

The built-in modules in the main process are added as getters in the
`remote` module, so you can use them directly like the `electron`
module.

    const app = remote.app;

Methods
-------

The `remote` module has the following methods:

### `remote.require(module)`

-   `module` String

Returns the object returned by `require(module)` in the main process.

### `remote.getCurrentWindow()`

Returns the [`BrowserWindow`](browser-window.md) object to which this
web page belongs.

### `remote.getCurrentWebContents()`

Returns the [`WebContents`](web-contents.md) object of this web page.

### `remote.getGlobal(name)`

-   `name` String

Returns the global variable of `name` (e.g. `global[name]`) in the main
process.

### `remote.process`

Returns the `process` object in the main process. This is the same as
`remote.getGlobal('process')` but is cached.

screen
======

The `screen` module retrieves information about screen size, displays,
cursor position, etc. You should not use this module until the `ready`
event of the `app` module is emitted.

`screen` is an
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

**Note:** In the renderer / DevTools, `window.screen` is a reserved DOM
property, so writing `var screen = require('electron').screen` will not
work. In our examples below, we use `electronScreen` as the variable
name instead. An example of creating a window that fills the whole
screen:

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    var mainWindow;

    app.on('ready', function() {
      var electronScreen = electron.screen;
      var size = electronScreen.getPrimaryDisplay().workAreaSize;
      mainWindow = new BrowserWindow({ width: size.width, height: size.height });
    });

Another example of creating a window in the external display:

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    var mainWindow;

    app.on('ready', function() {
      var electronScreen = electron.screen;
      var displays = electronScreen.getAllDisplays();
      var externalDisplay = null;
      for (var i in displays) {
        if (displays[i].bounds.x != 0 || displays[i].bounds.y != 0) {
          externalDisplay = displays[i];
          break;
        }
      }

      if (externalDisplay) {
        mainWindow = new BrowserWindow({
          x: externalDisplay.bounds.x + 50,
          y: externalDisplay.bounds.y + 50
        });
      }
    });

The `Display` object
--------------------

The `Display` object represents a physical display connected to the
system. A fake `Display` may exist on a headless system, or a `Display`
may correspond to a remote, virtual display.

-   `display` object
    -   `id` Integer - Unique identifier associated with the display.
    -   `rotation` Integer - Can be 0, 1, 2, 3, each represents screen
        rotation in clock-wise degrees of 0, 90, 180, 270.
    -   `scaleFactor` Number - Output device's pixel scale factor.
    -   `touchSupport` String - Can be `available`, `unavailable`,
        `unknown`.
    -   `bounds` Object
    -   `size` Object
    -   `workArea` Object
    -   `workAreaSize` Object

Events
------

The `screen` module emits the following events:

### Event: 'display-added'

Returns:

-   `event` Event
-   `newDisplay` Object

Emitted when `newDisplay` has been added.

### Event: 'display-removed'

Returns:

-   `event` Event
-   `oldDisplay` Object

Emitted when `oldDisplay` has been removed.

### Event: 'display-metrics-changed'

Returns:

-   `event` Event
-   `display` Object
-   `changedMetrics` Array

Emitted when one or more metrics change in a `display`. The
`changedMetrics` is an array of strings that describe the changes.
Possible changes are `bounds`, `workArea`, `scaleFactor` and `rotation`.

Methods
-------

The `screen` module has the following methods:

### `screen.getCursorScreenPoint()`

Returns the current absolute position of the mouse pointer.

### `screen.getPrimaryDisplay()`

Returns the primary display.

### `screen.getAllDisplays()`

Returns an array of displays that are currently available.

### `screen.getDisplayNearestPoint(point)`

-   `point` Object
    -   `x` Integer
    -   `y` Integer

Returns the display nearest the specified point.

### `screen.getDisplayMatching(rect)`

-   `rect` Object
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer

Returns the display that most closely intersects the provided bounds.

session
=======

The `session` module can be used to create new `Session` objects.

You can also access the `session` of existing pages by using the
`session` property of [`webContents`](web-contents.md) which is a
property of [`BrowserWindow`](browser-window.md).

    const BrowserWindow = require('electron').BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL("http://github.com");

    var ses = win.webContents.session;

Methods
-------

The `session` module has the following methods:

### session.fromPartition(partition)

-   `partition` String

Returns a new `Session` instance from `partition` string.

If `partition` starts with `persist:`, the page will use a persistent
session available to all pages in the app with the same `partition`. if
there is no `persist:` prefix, the page will use an in-memory session.
If the `partition` is empty then default session of the app will be
returned.

Properties
----------

The `session` module has the following properties:

### session.defaultSession

Returns the default session object of the app.

Class: Session
--------------

You can create a `Session` object in the `session` module:

    const session = require('electron').session;

    var ses = session.fromPartition('persist:name');

### Instance Events

The following events are available on instances of `Session`:

#### Event: 'will-download'

-   `event` Event
-   `item` [DownloadItem](download-item.md)
-   `webContents` [WebContents](web-contents.md)

Emitted when Electron is about to download `item` in `webContents`.

Calling `event.preventDefault()` will cancel the download and `item`
will not be available from next tick of the process.

    session.defaultSession.on('will-download', function(event, item, webContents) {
      event.preventDefault();
      require('request')(item.getURL(), function(data) {
        require('fs').writeFileSync('/somewhere', data);
      });
    });

### Instance Methods

The following methods are available on instances of `Session`:

#### `ses.cookies`

The `cookies` gives you ability to query and modify cookies. For
example:

    // Query all cookies.
    session.defaultSession.cookies.get({}, function(error, cookies) {
      console.log(cookies);
    });

    // Query all cookies associated with a specific url.
    session.defaultSession.cookies.get({ url : "http://www.github.com" }, function(error, cookies) {
      console.log(cookies);
    });

    // Set a cookie with the given cookie data;
    // may overwrite equivalent cookies if they exist.
    var cookie = { url : "http://www.github.com", name : "dummy_name", value : "dummy" };
    session.defaultSession.cookies.set(cookie, function(error) {
      if (error)
        console.error(error);
    });

#### `ses.cookies.get(filter, callback)`

-   `filter` Object
    -   `url` String (optional) - Retrieves cookies which are associated
        with `url`. Empty implies retrieving cookies of all urls.
    -   `name` String (optional) - Filters cookies by name.
    -   `domain` String (optional) - Retrieves cookies whose domains
        match or are subdomains of `domains`
    -   `path` String (optional) - Retrieves cookies whose path matches
        `path`.
    -   `secure` Boolean (optional) - Filters cookies by their
        Secure property.
    -   `session` Boolean (optional) - Filters out session or
        persistent cookies.
-   `callback` Function

Sends a request to get all cookies matching `details`, `callback` will
be called with `callback(error, cookies)` on complete.

`cookies` is an Array of `cookie` objects.

-   `cookie` Object
    -   `name` String - The name of the cookie.
    -   `value` String - The value of the cookie.
    -   `domain` String - The domain of the cookie.
    -   `hostOnly` String - Whether the cookie is a host-only cookie.
    -   `path` String - The path of the cookie.
    -   `secure` Boolean - Whether the cookie is marked as secure.
    -   `httpOnly` Boolean - Whether the cookie is marked as HTTP only.
    -   `session` Boolean - Whether the cookie is a session cookie or a
        persistent cookie with an expiration date.
    -   `expirationDate` Double (optional) - The expiration date of the
        cookie as the number of seconds since the UNIX epoch. Not
        provided for session cookies.

#### `ses.cookies.set(details, callback)`

-   `details` Object
    -   `url` String - Retrieves cookies which are associated with `url`
    -   `name` String - The name of the cookie. Empty by default
        if omitted.
    -   `value` String - The value of the cookie. Empty by default
        if omitted.
    -   `domain` String - The domain of the cookie. Empty by default
        if omitted.
    -   `path` String - The path of the cookie. Empty by default
        if omitted.
    -   `secure` Boolean - Whether the cookie should be marked
        as Secure. Defaults to false.
    -   `session` Boolean - Whether the cookie should be marked
        as HttpOnly. Defaults to false.
    -   `expirationDate` Double - The expiration date of the cookie as
        the number of seconds since the UNIX epoch. If omitted, the
        cookie becomes a session cookie.
-   `callback` Function

Sets the cookie with `details`, `callback` will be called with
`callback(error)` on complete.

#### `ses.cookies.remove(url, name, callback)`

-   `url` String - The URL associated with the cookie.
-   `name` String - The name of cookie to remove.
-   `callback` Function

Removes the cookies matching `url` and `name`, `callback` will called
with `callback()` on complete.

#### `ses.getCacheSize(callback)`

-   `callback` Function
    -   `size` Integer - Cache size used in bytes.

Returns the session's current cache size.

#### `ses.clearCache(callback)`

-   `callback` Function - Called when operation is done

Clears the session’s HTTP cache.

#### `ses.clearStorageData([options, ]callback)`

-   `options` Object (optional)
    -   `origin` String - Should follow `window.location.origin`’s
        representation `scheme://host:port`.
    -   `storages` Array - The types of storages to clear, can contain:
        `appcache`, `cookies`, `filesystem`, `indexdb`, `local storage`,
        `shadercache`, `websql`, `serviceworkers`
    -   `quotas` Array - The types of quotas to clear, can contain:
        `temporary`, `persistent`, `syncable`.
-   `callback` Function - Called when operation is done.

Clears the data of web storages.

#### `ses.flushStorageData()`

Writes any unwritten DOMStorage data to disk.

#### `ses.setProxy(config, callback)`

-   `config` Object
    -   `pacScript` String - The URL associated with the PAC file.
    -   `proxyRules` String - Rules indicating which proxies to use.
-   `callback` Function - Called when operation is done.

Sets the proxy settings.

When `pacScript` and `proxyRules` are provided together, the
`proxyRules` option is ignored and `pacScript` configuration is applied.

The `proxyRules` has to follow the rules bellow:

    proxyRules = schemeProxies[";"<schemeProxies>]
    schemeProxies = [<urlScheme>"="]<proxyURIList>
    urlScheme = "http" | "https" | "ftp" | "socks"
    proxyURIList = <proxyURL>[","<proxyURIList>]
    proxyURL = [<proxyScheme>"://"]<proxyHost>[":"<proxyPort>]

For example:

-   `http=foopy:80;ftp=foopy2` - Use HTTP proxy `foopy:80` for `http://`
    URLs, and HTTP proxy `foopy2:80` for `ftp://` URLs.
-   `foopy:80` - Use HTTP proxy `foopy:80` for all URLs.
-   `foopy:80,bar,direct://` - Use HTTP proxy `foopy:80` for all URLs,
    failing over to `bar` if `foopy:80` is unavailable, and after that
    using no proxy.
-   `socks4://foopy` - Use SOCKS v4 proxy `foopy:1080` for all URLs.
-   `http=foopy,socks5://bar.com` - Use HTTP proxy `foopy` for http
    URLs, and fail over to the SOCKS5 proxy `bar.com` if `foopy`
    is unavailable.
-   `http=foopy,direct://` - Use HTTP proxy `foopy` for http URLs, and
    use no proxy if `foopy` is unavailable.
-   `http=foopy;socks=foopy2` - Use HTTP proxy `foopy` for http URLs,
    and use `socks4://foopy2` for all other URLs.

### `ses.resolveProxy(url, callback)`

-   `url` URL
-   `callback` Function

Resolves the proxy information for `url`. The `callback` will be called
with `callback(proxy)` when the request is performed.

#### `ses.setDownloadPath(path)`

-   `path` String - The download location

Sets download saving directory. By default, the download directory will
be the `Downloads` under the respective app folder.

#### `ses.enableNetworkEmulation(options)`

-   `options` Object
    -   `offline` Boolean - Whether to emulate network outage.
    -   `latency` Double - RTT in ms
    -   `downloadThroughput` Double - Download rate in Bps
    -   `uploadThroughput` Double - Upload rate in Bps

Emulates network with the given configuration for the `session`.

    // To emulate a GPRS connection with 50kbps throughput and 500 ms latency.
    window.webContents.session.enableNetworkEmulation({
        latency: 500,
        downloadThroughput: 6400,
        uploadThroughput: 6400
    });

    // To emulate a network outage.
    window.webContents.session.enableNetworkEmulation({offline: true});

#### `ses.disableNetworkEmulation()`

Disables any network emulation already active for the `session`. Resets
to the original network configuration.

#### `ses.setCertificateVerifyProc(proc)`

-   `proc` Function

Sets the certificate verify proc for `session`, the `proc` will be
called with `proc(hostname, certificate, callback)` whenever a server
certificate verification is requested. Calling `callback(true)` accepts
the certificate, calling `callback(false)` rejects it.

Calling `setCertificateVerifyProc(null)` will revert back to default
certificate verify proc.

    myWindow.webContents.session.setCertificateVerifyProc(function(hostname, cert, callback) {
      if (hostname == 'github.com')
        callback(true);
      else
        callback(false);
    });

#### `ses.setPermissionRequestHandler(handler)`

-   `handler` Function
    -   `webContents` Object - [WebContents](web-contents.md) requesting
        the permission.
    -   `permission` String - Enum of 'media', 'geolocation',
        'notifications', 'midiSysex', 'pointerLock', 'fullscreen'.
    -   `callback` Function - Allow or deny the permission.

Sets the handler which can be used to respond to permission requests for
the `session`. Calling `callback(true)` will allow the permission and
`callback(false)` will reject it.

    session.fromPartition(partition).setPermissionRequestHandler(function(webContents, permission, callback) {
      if (webContents.getURL() === host) {
        if (permission == "notifications") {
          callback(false); // denied.
          return;
        }
      }

      callback(true);
    });

#### `ses.clearHostResolverCache([callback])`

-   `callback` Function (optional) - Called when operation is done.

Clears the host resolver cache.

#### `ses.webRequest`

The `webRequest` API set allows to intercept and modify contents of a
request at various stages of its lifetime.

Each API accepts an optional `filter` and a `listener`, the `listener`
will be called with `listener(details)` when the API's event has
happened, the `details` is an object that describes the request. Passing
`null` as `listener` will unsubscribe from the event.

The `filter` is an object that has an `urls` property, which is an Array
of URL patterns that will be used to filter out the requests that do not
match the URL patterns. If the `filter` is omitted then all requests
will be matched.

For certain events the `listener` is passed with a `callback`, which
should be called with an `response` object when `listener` has done its
work.

    // Modify the user agent for all requests to the following urls.
    var filter = {
      urls: ["https://*.github.com/*", "*://electron.github.io"]
    };

    session.defaultSession.webRequest.onBeforeSendHeaders(filter, function(details, callback) {
      details.requestHeaders['User-Agent'] = "MyAgent";
      callback({cancel: false, requestHeaders: details.requestHeaders});
    });

#### `ses.webRequest.onBeforeRequest([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details, callback)` when a
request is about to occur.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `uploadData` Array (optional)
-   `callback` Function

The `uploadData` is an array of `data` objects:

-   `data` Object
    -   `bytes` Buffer - Content being sent.
    -   `file` String - Path of file being uploaded.

The `callback` has to be called with an `response` object:

-   `response` Object
    -   `cancel` Boolean (optional)
    -   `redirectURL` String (optional) - The original request is
        prevented from being sent or completed, and is instead
        redirected to the given URL.

#### `ses.webRequest.onBeforeSendHeaders([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details, callback)` before
sending an HTTP request, once the request headers are available. This
may occur after a TCP connection is made to the server, but before any
http data is sent.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `requestHeaders` Object
-   `callback` Function

The `callback` has to be called with an `response` object:

-   `response` Object
    -   `cancel` Boolean (optional)
    -   `requestHeaders` Object (optional) - When provided, request will
        be made with these headers.

#### `ses.webRequest.onSendHeaders([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` just before a
request is going to be sent to the server, modifications of previous
`onBeforeSendHeaders` response are visible by the time this listener is
fired.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `requestHeaders` Object

#### `ses.webRequest.onHeadersReceived([filter,] listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details, callback)` when
HTTP response headers of a request have been received.

-   `details` Object
    -   `id` String
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `statusLine` String
    -   `statusCode` Integer
    -   `responseHeaders` Object
-   `callback` Function

The `callback` has to be called with an `response` object:

-   `response` Object
    -   `cancel` Boolean
    -   `responseHeaders` Object (optional) - When provided, the server
        is assumed to have responded with these headers.

#### `ses.webRequest.onResponseStarted([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` when first byte
of the response body is received. For HTTP requests, this means that the
status line and response headers are available.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `responseHeaders` Object
    -   `fromCache` Boolean - Indicates whether the response was fetched
        from disk cache.
    -   `statusCode` Integer
    -   `statusLine` String

#### `ses.webRequest.onBeforeRedirect([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` when a server
initiated redirect is about to occur.

-   `details` Object
    -   `id` String
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `redirectURL` String
    -   `statusCode` Integer
    -   `ip` String (optional) - The server IP address that the request
        was actually sent to.
    -   `fromCache` Boolean
    -   `responseHeaders` Object

#### `ses.webRequest.onCompleted([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` when a request is
completed.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `responseHeaders` Object
    -   `fromCache` Boolean
    -   `statusCode` Integer
    -   `statusLine` String

#### `ses.webRequest.onErrorOccurred([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` when an error
occurs.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `fromCache` Boolean
    -   `error` String - The error description.

shell
=====

The `shell` module provides functions related to desktop integration.

An example of opening a URL in the user's default browser:

    const shell = require('electron').shell;

    shell.openExternal('https://github.com');

Methods
-------

The `shell` module has the following methods:

### `shell.showItemInFolder(fullPath)`

-   `fullPath` String

Show the given file in a file manager. If possible, select the file.

### `shell.openItem(fullPath)`

-   `fullPath` String

Open the given file in the desktop's default manner.

### `shell.openExternal(url[, options])`

-   `url` String
-   `options` Object (optional) *OS X*
    -   `activate` Boolean - `true` to bring the opened application to
        the foreground. The default is `true`.

Open the given external protocol URL in the desktop's default manner.
(For example, mailto: URLs in the user's default mail agent.) Returns
true if an application was available to open the URL, false otherwise.

### `shell.moveItemToTrash(fullPath)`

-   `fullPath` String

Move the given file to trash and returns a boolean status for the
operation.

### `shell.beep()`

Play the beep sound.

Synopsis
========

All of [Node.js's built-in modules](http://nodejs.org/api/) are
available in Electron and third-party node modules also fully supported
as well (including the [native
modules](../tutorial/using-native-node-modules.md)).

Electron also provides some extra built-in modules for developing native
desktop applications. Some modules are only available in the main
process, some are only available in the renderer process (web page), and
some can be used in both processes.

The basic rule is: if a module is
[GUI](https://en.wikipedia.org/wiki/Graphical_user_interface) or
low-level system related, then it should be only available in the main
process. You need to be familiar with the concept of [main process vs.
renderer process](../tutorial/quick-start.md#the-main-process) scripts
to be able to use those modules.

The main process script is just like a normal Node.js script:

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    var window = null;

    app.on('ready', function() {
      window = new BrowserWindow({width: 800, height: 600});
      window.loadURL('https://github.com');
    });

The renderer process is no different than a normal web page, except for
the extra ability to use node modules:

    <!DOCTYPE html>
    <html>
    <body>
    <script>
      const remote = require('electron').remote;
      console.log(remote.app.getVersion());
    </script>
    </body>
    </html>

To run your app, read [Run your
app](../tutorial/quick-start.md#run-your-app).

Destructuring assignment
------------------------

If you are using CoffeeScript or Babel, you can also use [destructuring
assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
to make it easier to use built-in modules:

    const {app, BrowserWindow} = require('electron')

However if you are using plain JavaScript, you have to wait until Chrome
fully supports ES6.

Disable old styles of using built-in modules
--------------------------------------------

Before v0.35.0, all built-in modules have to be used in the form of
`require('module-name')`, though it has [many
disadvantages](https://github.com/electron/electron/issues/387), we are
still supporting it for compatibility with old apps.

To disable the old styles completely, you can set the
`ELECTRON_HIDE_INTERNAL_MODULES` environment variable:

    process.env.ELECTRON_HIDE_INTERNAL_MODULES = 'true'

Or call the `hideInternalModules` API:

    require('electron').hideInternalModules()

Tray
====

A `Tray` represents an icon in an operating system's notification area,
it is usually attached with a context menu.

    const electron = require('electron');
    const app = electron.app;
    const Menu = electron.Menu;
    const Tray = electron.Tray;

    var appIcon = null;
    app.on('ready', function(){
      appIcon = new Tray('/path/to/my/icon');
      var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
      ]);
      appIcon.setToolTip('This is my application.');
      appIcon.setContextMenu(contextMenu);
    });

**Platform limitations:**

-   On Linux the app indicator will be used if it is supported,
    otherwise `GtkStatusIcon` will be used instead.
-   On Linux distributions that only have app indicator support, you
    have to install `libappindicator1` to make the tray icon work.
-   App indicator will only be shown when it has a context menu.
-   When app indicator is used on Linux, the `click` event is ignored.
-   On Linux in order for changes made to individual `MenuItem`s to take
    effect, you have to call `setContextMenu` again. For example:

&lt;!-- --&gt;

    contextMenu.items[2].checked = false;
    appIcon.setContextMenu(contextMenu);

If you want to keep exact same behaviors on all platforms, you should
not rely on the `click` event and always attach a context menu to the
tray icon.

Class: Tray
-----------

`Tray` is an
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### `new Tray(image)`

-   `image` [NativeImage](native-image.md)

Creates a new tray icon associated with the `image`.

Events
------

The `Tray` module emits the following events:

**Note:** Some events are only available on specific operating systems
and are labeled as such.

### Event: 'click'

-   `event` Event
    -   `altKey` Boolean
    -   `shiftKey` Boolean
    -   `ctrlKey` Boolean
    -   `metaKey` Boolean
-   `bounds` Object - the bounds of tray icon.
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer

Emitted when the tray icon is clicked.

**Note:** The `bounds` payload is only implemented on OS X and Windows.

### Event: 'right-click' *OS X* *Windows*

-   `event` Event
    -   `altKey` Boolean
    -   `shiftKey` Boolean
    -   `ctrlKey` Boolean
    -   `metaKey` Boolean
-   `bounds` Object - the bounds of tray icon.
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer

Emitted when the tray icon is right clicked.

### Event: 'double-click' *OS X* *Windows*

-   `event` Event
    -   `altKey` Boolean
    -   `shiftKey` Boolean
    -   `ctrlKey` Boolean
    -   `metaKey` Boolean
-   `bounds` Object - the bounds of tray icon
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer

Emitted when the tray icon is double clicked.

### Event: 'balloon-show' *Windows*

Emitted when the tray balloon shows.

### Event: 'balloon-click' *Windows*

Emitted when the tray balloon is clicked.

### Event: 'balloon-closed' *Windows*

Emitted when the tray balloon is closed because of timeout or user
manually closes it.

### Event: 'drop' *OS X*

Emitted when any dragged items are dropped on the tray icon.

### Event: 'drop-files' *OS X*

-   `event`
-   `files` Array - the file path of dropped files.

Emitted when dragged files are dropped in the tray icon.

### Event: 'drag-enter' *OS X*

Emitted when a drag operation enters the tray icon.

### Event: 'drag-leave' *OS X*

Emitted when a drag operation exits the tray icon.

### Event: 'drag-end' *OS X*

Emitted when a drag operation ends on the tray or ends at another
location.

Methods
-------

The `Tray` module has the following methods:

**Note:** Some methods are only available on specific operating systems
and are labeled as such.

### `Tray.destroy()`

Destroys the tray icon immediately.

### `Tray.setImage(image)`

-   `image` [NativeImage](native-image.md)

Sets the `image` associated with this tray icon.

### `Tray.setPressedImage(image)` *OS X*

-   `image` [NativeImage](native-image.md)

Sets the `image` associated with this tray icon when pressed on OS X.

### `Tray.setToolTip(toolTip)`

-   `toolTip` String

Sets the hover text for this tray icon.

### `Tray.setTitle(title)` *OS X*

-   `title` String

Sets the title displayed aside of the tray icon in the status bar.

### `Tray.setHighlightMode(highlight)` *OS X*

-   `highlight` Boolean

Sets whether the tray icon's background becomes highlighted (in blue)
when the tray icon is clicked. Defaults to true.

### `Tray.displayBalloon(options)` *Windows*

-   `options` Object
    -   `icon` [NativeImage](native-image.md)
    -   `title` String
    -   `content` String

Displays a tray balloon.

### `Tray.popUpContextMenu([menu, position])` *OS X* *Windows*

-   `menu` Menu (optional)
-   `position` Object (optional) - The pop up position.
    -   `x` Integer
    -   `y` Integer

Popups the context menu of tray icon. When `menu` is passed, the `menu`
will showed instead of the tray's context menu.

The `position` is only available on Windows, and it is (0, 0) by
default.

### `Tray.setContextMenu(menu)`

-   `menu` Menu

Sets the context menu for this icon.

webContents
===========

`webContents` is an
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

It is responsible for rendering and controlling a web page and is a
property of the [`BrowserWindow`](browser-window.md) object. An example
of accessing the `webContents` object:

    const BrowserWindow = require('electron').BrowserWindow;

    var win = new BrowserWindow({width: 800, height: 1500});
    win.loadURL("http://github.com");

    var webContents = win.webContents;

Events
------

The `webContents` object emits the following events:

### Event: 'did-finish-load'

Emitted when the navigation is done, i.e. the spinner of the tab has
stopped spinning, and the `onload` event was dispatched.

### Event: 'did-fail-load'

Returns:

-   `event` Event
-   `errorCode` Integer
-   `errorDescription` String
-   `validatedURL` String
-   `isMainFrame` Boolean

This event is like `did-finish-load` but emitted when the load failed or
was cancelled, e.g. `window.stop()` is invoked. The full list of error
codes and their meaning is available
[here](https://code.google.com/p/chromium/codesearch#chromium/src/net/base/net_error_list.h).

### Event: 'did-frame-finish-load'

Returns:

-   `event` Event
-   `isMainFrame` Boolean

Emitted when a frame has done navigation.

### Event: 'did-start-loading'

Corresponds to the points in time when the spinner of the tab started
spinning.

### Event: 'did-stop-loading'

Corresponds to the points in time when the spinner of the tab stopped
spinning.

### Event: 'did-get-response-details'

Returns:

-   `event` Event
-   `status` Boolean
-   `newURL` String
-   `originalURL` String
-   `httpResponseCode` Integer
-   `requestMethod` String
-   `referrer` String
-   `headers` Object

Emitted when details regarding a requested resource are available.
`status` indicates the socket connection to download the resource.

### Event: 'did-get-redirect-request'

Returns:

-   `event` Event
-   `oldURL` String
-   `newURL` String
-   `isMainFrame` Boolean
-   `httpResponseCode` Integer
-   `requestMethod` String
-   `referrer` String
-   `headers` Object

Emitted when a redirect is received while requesting a resource.

### Event: 'dom-ready'

Returns:

-   `event` Event

Emitted when the document in the given frame is loaded.

### Event: 'page-favicon-updated'

Returns:

-   `event` Event
-   `favicons` Array - Array of URLs

Emitted when page receives favicon urls.

### Event: 'new-window'

Returns:

-   `event` Event
-   `url` String
-   `frameName` String
-   `disposition` String - Can be `default`, `foreground-tab`,
    `background-tab`, `new-window` and `other`.
-   `options` Object - The options which will be used for creating the
    new `BrowserWindow`.

Emitted when the page requests to open a new window for a `url`. It
could be requested by `window.open` or an external link like
`<a target='_blank'>`.

By default a new `BrowserWindow` will be created for the `url`.

Calling `event.preventDefault()` will prevent creating new windows.

### Event: 'will-navigate'

Returns:

-   `event` Event
-   `url` String

Emitted when a user or the page wants to start navigation. It can happen
when the `window.location` object is changed or a user clicks a link in
the page.

This event will not emit when the navigation is started programmatically
with APIs like `webContents.loadURL` and `webContents.back`.

It is also not emitted for in-page navigations, such as clicking anchor
links or updating the `window.location.hash`. Use `did-navigate-in-page`
event for this purpose.

Calling `event.preventDefault()` will prevent the navigation.

### Event: 'did-navigate'

Returns:

-   `event` Event
-   `url` String

Emitted when a navigation is done.

This event is not emitted for in-page navigations, such as clicking
anchor links or updating the `window.location.hash`. Use
`did-navigate-in-page` event for this purpose.

### Event: 'did-navigate-in-page'

Returns:

-   `event` Event
-   `url` String

Emitted when an in-page navigation happened.

When in-page navigation happens, the page URL changes but does not cause
navigation outside of the page. Examples of this occurring are when
anchor links are clicked or when the DOM `hashchange` event is
triggered.

### Event: 'crashed'

Emitted when the renderer process has crashed.

### Event: 'plugin-crashed'

Returns:

-   `event` Event
-   `name` String
-   `version` String

Emitted when a plugin process has crashed.

### Event: 'destroyed'

Emitted when `webContents` is destroyed.

### Event: 'devtools-opened'

Emitted when DevTools is opened.

### Event: 'devtools-closed'

Emitted when DevTools is closed.

### Event: 'devtools-focused'

Emitted when DevTools is focused / opened.

### Event: 'certificate-error'

Returns:

-   `event` Event
-   `url` URL
-   `error` String - The error code
-   `certificate` Object
    -   `data` Buffer - PEM encoded data
    -   `issuerName` String
-   `callback` Function

Emitted when failed to verify the `certificate` for `url`.

The usage is the same with [the `certificate-error` event of
`app`](app.md#event-certificate-error).

### Event: 'select-client-certificate'

Returns:

-   `event` Event
-   `url` URL
-   `certificateList` \[Objects\]
    -   `data` Buffer - PEM encoded data
    -   `issuerName` String - Issuer's Common Name
-   `callback` Function

Emitted when a client certificate is requested.

The usage is the same with [the `select-client-certificate` event of
`app`](app.md#event-select-client-certificate).

### Event: 'login'

Returns:

-   `event` Event
-   `request` Object
    -   `method` String
    -   `url` URL
    -   `referrer` URL
-   `authInfo` Object
    -   `isProxy` Boolean
    -   `scheme` String
    -   `host` String
    -   `port` Integer
    -   `realm` String
-   `callback` Function

Emitted when `webContents` wants to do basic auth.

The usage is the same with [the `login` event of
`app`](app.md#event-login).

### Event: 'found-in-page'

Returns:

-   `event` Event
-   `result` Object
    -   `requestId` Integer
    -   `finalUpdate` Boolean - Indicates if more responses are
        to follow.
    -   `activeMatchOrdinal` Integer (optional) - Position of the
        active match.
    -   `matches` Integer (optional) - Number of Matches.
    -   `selectionArea` Object (optional) - Coordinates of first
        match region.

Emitted when a result is available for
[`webContents.findInPage`](web-contents.md#webcontentsfindinpage)
request.

### Event: 'media-started-playing'

Emitted when media starts playing.

### Event: 'media-paused'

Emitted when media is paused or done playing.

### Event: 'did-change-theme-color'

Emitted when a page's theme color changes. This is usually due to
encountering a meta tag:

    <meta name='theme-color' content='#ff0000'>

### Event: 'cursor-changed'

Returns:

-   `event` Event
-   `type` String
-   `image` NativeImage (optional)
-   `scale` Float (optional)

Emitted when the cursor's type changes. The `type` parameter can be
`default`, `crosshair`, `pointer`, `text`, `wait`, `help`, `e-resize`,
`n-resize`, `ne-resize`, `nw-resize`, `s-resize`, `se-resize`,
`sw-resize`, `w-resize`, `ns-resize`, `ew-resize`, `nesw-resize`,
`nwse-resize`, `col-resize`, `row-resize`, `m-panning`, `e-panning`,
`n-panning`, `ne-panning`, `nw-panning`, `s-panning`, `se-panning`,
`sw-panning`, `w-panning`, `move`, `vertical-text`, `cell`,
`context-menu`, `alias`, `progress`, `nodrop`, `copy`, `none`,
`not-allowed`, `zoom-in`, `zoom-out`, `grab`, `grabbing`, `custom`.

If the `type` parameter is `custom`, the `image` parameter will hold the
custom cursor image in a `NativeImage`, and the `scale` will hold
scaling information for the image.

Instance Methods
----------------

The `webContents` object has the following instance methods:

### `webContents.loadURL(url[, options])`

-   `url` URL
-   `options` Object (optional)
    -   `httpReferrer` String - A HTTP Referrer url.
    -   `userAgent` String - A user agent originating the request.
    -   `extraHeaders` String - Extra headers separated by "\\n"

Loads the `url` in the window, the `url` must contain the protocol
prefix, e.g. the `http://` or `file://`. If the load should bypass http
cache then use the `pragma` header to achieve it.

    const options = {"extraHeaders" : "pragma: no-cache\n"}
    webContents.loadURL(url, options)

### `webContents.downloadURL(url)`

-   `url` URL

Initiates a download of the resource at `url` without navigating. The
`will-download` event of `session` will be triggered.

### `webContents.getURL()`

Returns URL of the current web page.

    var win = new BrowserWindow({width: 800, height: 600});
    win.loadURL("http://github.com");

    var currentURL = win.webContents.getURL();

### `webContents.getTitle()`

Returns the title of the current web page.

### `webContents.isLoading()`

Returns whether web page is still loading resources.

### `webContents.isWaitingForResponse()`

Returns whether the web page is waiting for a first-response from the
main resource of the page.

### `webContents.stop()`

Stops any pending navigation.

### `webContents.reload()`

Reloads the current web page.

### `webContents.reloadIgnoringCache()`

Reloads current page and ignores cache.

### `webContents.canGoBack()`

Returns whether the browser can go back to previous web page.

### `webContents.canGoForward()`

Returns whether the browser can go forward to next web page.

### `webContents.canGoToOffset(offset)`

-   `offset` Integer

Returns whether the web page can go to `offset`.

### `webContents.clearHistory()`

Clears the navigation history.

### `webContents.goBack()`

Makes the browser go back a web page.

### `webContents.goForward()`

Makes the browser go forward a web page.

### `webContents.goToIndex(index)`

-   `index` Integer

Navigates browser to the specified absolute web page index.

### `webContents.goToOffset(offset)`

-   `offset` Integer

Navigates to the specified offset from the "current entry".

### `webContents.isCrashed()`

Whether the renderer process has crashed.

### `webContents.setUserAgent(userAgent)`

-   `userAgent` String

Overrides the user agent for this web page.

### `webContents.getUserAgent()`

Returns a `String` representing the user agent for this web page.

### `webContents.insertCSS(css)`

-   `css` String

Injects CSS into the current web page.

### `webContents.executeJavaScript(code[, userGesture, callback])`

-   `code` String
-   `userGesture` Boolean (optional)
-   `callback` Function (optional) - Called after script has
    been executed.
    -   `result`

Evaluates `code` in page.

In the browser window some HTML APIs like `requestFullScreen` can only
be invoked by a gesture from the user. Setting `userGesture` to `true`
will remove this limitation.

### `webContents.setAudioMuted(muted)`

-   `muted` Boolean

Mute the audio on the current web page.

### `webContents.isAudioMuted()`

Returns whether this page has been muted.

### `webContents.undo()`

Executes the editing command `undo` in web page.

### `webContents.redo()`

Executes the editing command `redo` in web page.

### `webContents.cut()`

Executes the editing command `cut` in web page.

### `webContents.copy()`

Executes the editing command `copy` in web page.

### `webContents.paste()`

Executes the editing command `paste` in web page.

### `webContents.pasteAndMatchStyle()`

Executes the editing command `pasteAndMatchStyle` in web page.

### `webContents.delete()`

Executes the editing command `delete` in web page.

### `webContents.selectAll()`

Executes the editing command `selectAll` in web page.

### `webContents.unselect()`

Executes the editing command `unselect` in web page.

### `webContents.replace(text)`

-   `text` String

Executes the editing command `replace` in web page.

### `webContents.replaceMisspelling(text)`

-   `text` String

Executes the editing command `replaceMisspelling` in web page.

### `webContents.insertText(text)`

-   `text` String

Inserts `text` to the focused element.

### `webContents.findInPage(text[, options])`

-   `text` String - Content to be searched, must not be empty.
-   `options` Object (optional)
    -   `forward` Boolean - Whether to search forward or backward,
        defaults to `true`.
    -   `findNext` Boolean - Whether the operation is first request or a
        follow up, defaults to `false`.
    -   `matchCase` Boolean - Whether search should be case-sensitive,
        defaults to `false`.
    -   `wordStart` Boolean - Whether to look only at the start
        of words. defaults to `false`.
    -   `medialCapitalAsWordStart` Boolean - When combined with
        `wordStart`, accepts a match in the middle of a word if the
        match begins with an uppercase letter followed by a lowercase
        or non-letter. Accepts several other intra-word matches,
        defaults to `false`.

Starts a request to find all matches for the `text` in the web page and
returns an `Integer` representing the request id used for the request.
The result of the request can be obtained by subscribing to
[`found-in-page`](web-contents.md#event-found-in-page) event.

### `webContents.stopFindInPage(action)`

-   `action` String - Specifies the action to take place when ending
    [`webContents.findInPage`](web-contents.md#webcontentfindinpage) request.
    -   `clearSelection` - Translate the selection into a
        normal selection.
    -   `keepSelection` - Clear the selection.
    -   `activateSelection` - Focus and click the selection node.

Stops any `findInPage` request for the `webContents` with the provided
`action`.

    webContents.on('found-in-page', function(event, result) {
      if (result.finalUpdate)
        webContents.stopFindInPage("clearSelection");
    });

    const requestId = webContents.findInPage("api");

### `webContents.hasServiceWorker(callback)`

-   `callback` Function

Checks if any ServiceWorker is registered and returns a boolean as
response to `callback`.

### `webContents.unregisterServiceWorker(callback)`

-   `callback` Function

Unregisters any ServiceWorker if present and returns a boolean as
response to `callback` when the JS promise is fulfilled or false when
the JS promise is rejected.

### `webContents.print([options])`

-   `options` Object (optional)
    -   `silent` Boolean - Don't ask user for print settings. Default is
        `false`.
    -   `printBackground` Boolean - Also prints the background color and
        image of the web page. Default is `false`.

Prints window's web page. When `silent` is set to `false`, Electron will
pick up system's default printer and default settings for printing.

Calling `window.print()` in web page is equivalent to calling
`webContents.print({silent: false, printBackground: false})`.

**Note:** On Windows, the print API relies on `pdf.dll`. If your
application doesn't need the print feature, you can safely remove
`pdf.dll` to reduce binary size.

### `webContents.printToPDF(options, callback)`

-   `options` Object
    -   `marginsType` Integer - Specifies the type of margins to use.
        Uses 0 for default margin, 1 for no margin, and 2 for
        minimum margin.
    -   `pageSize` String - Specify page size of the generated PDF. Can
        be `A3`, `A4`, `A5`, `Legal`, `Letter` and `Tabloid`.
    -   `printBackground` Boolean - Whether to print CSS backgrounds.
    -   `printSelectionOnly` Boolean - Whether to print selection only.
    -   `landscape` Boolean - `true` for landscape, `false`
        for portrait.
-   `callback` Function

Prints window's web page as PDF with Chromium's preview printing custom
settings.

The `callback` will be called with `callback(error, data)` on
completion. The `data` is a `Buffer` that contains the generated PDF
data.

By default, an empty `options` will be regarded as:

    {
      marginsType: 0,
      printBackground: false,
      printSelectionOnly: false,
      landscape: false
    }

    const BrowserWindow = require('electron').BrowserWindow;
    const fs = require('fs');

    var win = new BrowserWindow({width: 800, height: 600});
    win.loadURL("http://github.com");

    win.webContents.on("did-finish-load", function() {
      // Use default printing options
      win.webContents.printToPDF({}, function(error, data) {
        if (error) throw error;
        fs.writeFile("/tmp/print.pdf", data, function(error) {
          if (error)
            throw error;
          console.log("Write PDF successfully.");
        })
      })
    });

### `webContents.addWorkSpace(path)`

-   `path` String

Adds the specified path to DevTools workspace. Must be used after
DevTools creation:

    mainWindow.webContents.on('devtools-opened', function() {
      mainWindow.webContents.addWorkSpace(__dirname);
    });

### `webContents.removeWorkSpace(path)`

-   `path` String

Removes the specified path from DevTools workspace.

### `webContents.openDevTools([options])`

-   `options` Object (optional)
    -   `detach` Boolean - opens DevTools in a new window

Opens the devtools.

### `webContents.closeDevTools()`

Closes the devtools.

### `webContents.isDevToolsOpened()`

Returns whether the devtools is opened.

### `webContents.isDevToolsFocused()`

Returns whether the devtools view is focused .

### `webContents.toggleDevTools()`

Toggles the developer tools.

### `webContents.inspectElement(x, y)`

-   `x` Integer
-   `y` Integer

Starts inspecting element at position (`x`, `y`).

### `webContents.inspectServiceWorker()`

Opens the developer tools for the service worker context.

### `webContents.send(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Send an asynchronous message to renderer process via `channel`, you can
also send arbitrary arguments. Arguments will be serialized in JSON
internally and hence no functions or prototype chain will be included.

The renderer process can handle the message by listening to `channel`
with the `ipcRenderer` module.

An example of sending messages from the main process to the renderer
process:

    // In the main process.
    var window = null;
    app.on('ready', function() {
      window = new BrowserWindow({width: 800, height: 600});
      window.loadURL('file://' + __dirname + '/index.html');
      window.webContents.on('did-finish-load', function() {
        window.webContents.send('ping', 'whoooooooh!');
      });
    });

    <!-- index.html -->
    <html>
    <body>
      <script>
        require('electron').ipcRenderer.on('ping', function(event, message) {
          console.log(message);  // Prints "whoooooooh!"
        });
      </script>
    </body>
    </html>

### `webContents.enableDeviceEmulation(parameters)`

`parameters` Object, properties:

-   `screenPosition` String - Specify the screen type to emulate
    (default: `desktop`)
    -   `desktop`
    -   `mobile`
-   `screenSize` Object - Set the emulated screen size (screenPosition
    == mobile)
    -   `width` Integer - Set the emulated screen width
    -   `height` Integer - Set the emulated screen height
-   `viewPosition` Object - Position the view on the screen
    (screenPosition == mobile) (default: `{x: 0, y: 0}`)
    -   `x` Integer - Set the x axis offset from top left corner
    -   `y` Integer - Set the y axis offset from top left corner
-   `deviceScaleFactor` Integer - Set the device scale factor (if zero
    defaults to original device scale factor) (default: `0`)
-   `viewSize` Object - Set the emulated view size (empty means
    no override)
    -   `width` Integer - Set the emulated view width
    -   `height` Integer - Set the emulated view height
-   `fitToView` Boolean - Whether emulated view should be scaled down if
    necessary to fit into available space (default: `false`)
-   `offset` Object - Offset of the emulated view inside available space
    (not in fit to view mode) (default: `{x: 0, y: 0}`)
    -   `x` Float - Set the x axis offset from top left corner
    -   `y` Float - Set the y axis offset from top left corner
-   `scale` Float - Scale of emulated view inside available space (not
    in fit to view mode) (default: `1`)

Enable device emulation with the given parameters.

### `webContents.disableDeviceEmulation()`

Disable device emulation enabled by `webContents.enableDeviceEmulation`.

### `webContents.sendInputEvent(event)`

-   `event` Object
    -   `type` String (**required**) - The type of the event, can be
        `mouseDown`, `mouseUp`, `mouseEnter`, `mouseLeave`,
        `contextMenu`, `mouseWheel`, `mouseMove`, `keyDown`, `keyUp`,
        `char`.
    -   `modifiers` Array - An array of modifiers of the event, can
        include `shift`, `control`, `alt`, `meta`, `isKeypad`,
        `isAutoRepeat`, `leftButtonDown`, `middleButtonDown`,
        `rightButtonDown`, `capsLock`, `numLock`, `left`, `right`.

Sends an input `event` to the page.

For keyboard events, the `event` object also have following properties:

-   `keyCode` String (**required**) - The character that will be sent as
    the keyboard event. Should only use the valid key codes in
    [Accelerator](accelerator.md).

For mouse events, the `event` object also have following properties:

-   `x` Integer (**required**)
-   `y` Integer (**required**)
-   `button` String - The button pressed, can be `left`, `middle`,
    `right`
-   `globalX` Integer
-   `globalY` Integer
-   `movementX` Integer
-   `movementY` Integer
-   `clickCount` Integer

For the `mouseWheel` event, the `event` object also have following
properties:

-   `deltaX` Integer
-   `deltaY` Integer
-   `wheelTicksX` Integer
-   `wheelTicksY` Integer
-   `accelerationRatioX` Integer
-   `accelerationRatioY` Integer
-   `hasPreciseScrollingDeltas` Boolean
-   `canScroll` Boolean

### `webContents.beginFrameSubscription(callback)`

-   `callback` Function

Begin subscribing for presentation events and captured frames, the
`callback` will be called with `callback(frameBuffer)` when there is a
presentation event.

The `frameBuffer` is a `Buffer` that contains raw pixel data. On most
machines, the pixel data is effectively stored in 32bit BGRA format, but
the actual representation depends on the endianness of the processor
(most modern processors are little-endian, on machines with big-endian
processors the data is in 32bit ARGB format).

### `webContents.endFrameSubscription()`

End subscribing for frame presentation events.

### `webContents.savePage(fullPath, saveType, callback)`

-   `fullPath` String - The full file path.
-   `saveType` String - Specify the save type.
    -   `HTMLOnly` - Save only the HTML of the page.
    -   `HTMLComplete` - Save complete-html page.
    -   `MHTML` - Save complete-html page as MHTML.
-   `callback` Function - `function(error) {}`.
    -   `error` Error

Returns true if the process of saving page has been initiated
successfully.

    win.loadURL('https://github.com');

    win.webContents.on('did-finish-load', function() {
      win.webContents.savePage('/tmp/test.html', 'HTMLComplete', function(error) {
        if (!error)
          console.log("Save page successfully");
      });
    });

Instance Properties
-------------------

`WebContents` objects also have the following properties:

### `webContents.session`

Returns the [session](session.md) object used by this webContents.

### `webContents.hostWebContents`

Returns the `WebContents` that might own this `WebContents`.

### `webContents.devToolsWebContents`

Get the `WebContents` of DevTools for this `WebContents`.

**Note:** Users should never store this object because it may become
`null` when the DevTools has been closed.

### `webContents.debugger`

Debugger API serves as an alternate transport for [remote debugging
protocol](https://developer.chrome.com/devtools/docs/debugger-protocol).

    try {
      win.webContents.debugger.attach("1.1");
    } catch(err) {
      console.log("Debugger attach failed : ", err);
    };

    win.webContents.debugger.on('detach', function(event, reason) {
      console.log("Debugger detached due to : ", reason);
    });

    win.webContents.debugger.on('message', function(event, method, params) {
      if (method == "Network.requestWillBeSent") {
        if (params.request.url == "https://www.github.com")
          win.webContents.debugger.detach();
      }
    })

    win.webContents.debugger.sendCommand("Network.enable");

#### `webContents.debugger.attach([protocolVersion])`

-   `protocolVersion` String (optional) - Requested debugging
    protocol version.

Attaches the debugger to the `webContents`.

#### `webContents.debugger.isAttached()`

Returns a boolean indicating whether a debugger is attached to the
`webContents`.

#### `webContents.debugger.detach()`

Detaches the debugger from the `webContents`.

#### `webContents.debugger.sendCommand(method[, commandParams, callback])`

-   `method` String - Method name, should be one of the methods defined
    by the remote debugging protocol.
-   `commandParams` Object (optional) - JSON object with
    request parameters.
-   `callback` Function (optional) - Response
    -   `error` Object - Error message indicating the failure of
        the command.
    -   `result` Object - Response defined by the 'returns' attribute of
        the command description in the remote debugging protocol.

Send given command to the debugging target.

#### Event: 'detach'

-   `event` Event
-   `reason` String - Reason for detaching debugger.

Emitted when debugging session is terminated. This happens either when
`webContents` is closed or devtools is invoked for the attached
`webContents`.

#### Event: 'message'

-   `event` Event
-   `method` String - Method name.
-   `params` Object - Event parameters defined by the 'parameters'
    attribute in the remote debugging protocol.

Emitted whenever debugging target issues instrumentation event.

webFrame
========

The `web-frame` module allows you to customize the rendering of the
current web page.

An example of zooming current page to 200%.

    var webFrame = require('electron').webFrame;

    webFrame.setZoomFactor(2);

Methods
-------

The `web-frame` module has the following methods:

### `webFrame.setZoomFactor(factor)`

-   `factor` Number - Zoom factor.

Changes the zoom factor to the specified factor. Zoom factor is zoom
percent divided by 100, so 300% = 3.0.

### `webFrame.getZoomFactor()`

Returns the current zoom factor.

### `webFrame.setZoomLevel(level)`

-   `level` Number - Zoom level

Changes the zoom level to the specified level. The original size is 0
and each increment above or below represents zooming 20% larger or
smaller to default limits of 300% and 50% of original size,
respectively.

### `webFrame.getZoomLevel()`

Returns the current zoom level.

### `webFrame.setZoomLevelLimits(minimumLevel, maximumLevel)`

-   `minimumLevel` Number
-   `maximumLevel` Number

Sets the maximum and minimum zoom level.

### `webFrame.setSpellCheckProvider(language, autoCorrectWord, provider)`

-   `language` String
-   `autoCorrectWord` Boolean
-   `provider` Object

Sets a provider for spell checking in input fields and text areas.

The `provider` must be an object that has a `spellCheck` method that
returns whether the word passed is correctly spelled.

An example of using
[node-spellchecker](https://github.com/atom/node-spellchecker) as
provider:

    webFrame.setSpellCheckProvider("en-US", true, {
      spellCheck: function(text) {
        return !(require('spellchecker').isMisspelled(text));
      }
    });

### `webFrame.registerURLSchemeAsSecure(scheme)`

-   `scheme` String

Registers the `scheme` as secure scheme.

Secure schemes do not trigger mixed content warnings. For example,
`https` and `data` are secure schemes because they cannot be corrupted
by active network attackers.

### `webFrame.registerURLSchemeAsBypassingCSP(scheme)`

-   `scheme` String

Resources will be loaded from this `scheme` regardless of the current
page's Content Security Policy.

### `webFrame.registerURLSchemeAsPrivileged(scheme)`

-   `scheme` String

Registers the `scheme` as secure, bypasses content security policy for
resources, allows registering ServiceWorker and supports fetch API.

### `webFrame.insertText(text)`

-   `text` String

Inserts `text` to the focused element.

### `webFrame.executeJavaScript(code[, userGesture])`

-   `code` String
-   `userGesture` Boolean (optional) - Default is `false`.

Evaluates `code` in page.

In the browser window some HTML APIs like `requestFullScreen` can only
be invoked by a gesture from the user. Setting `userGesture` to `true`
will remove this limitation.

The `<webview>` tag
===================

Use the `webview` tag to embed 'guest' content (such as web pages) in
your Electron app. The guest content is contained within the `webview`
container. An embedded page within your app controls how the guest
content is laid out and rendered.

Unlike an `iframe`, the `webview` runs in a separate process than your
app. It doesn't have the same permissions as your web page and all
interactions between your app and embedded content will be asynchronous.
This keeps your app safe from the embedded content.

Example
-------

To embed a web page in your app, add the `webview` tag to your app's
embedder page (this is the app page that will display the guest
content). In its simplest form, the `webview` tag includes the `src` of
the web page and css styles that control the appearance of the `webview`
container:

    <webview id="foo" src="https://www.github.com/" style="display:inline-flex; width:640px; height:480px"></webview>

Please note that the `webview` tag's style uses `display:flex;`
internally to ensure the child `object` element fills the full height
and width of its `webview` container when used with traditional and
flexbox layouts (since v0.36.11). Please do not overwrite the default
`display:flex;` CSS property, unless specifying `display:inline-flex;`
for inline layout.

If you want to control the guest content in any way, you can write
JavaScript that listens for `webview` events and responds to those
events using the `webview` methods. Here's sample code with two event
listeners: one that listens for the web page to start loading, the other
for the web page to stop loading, and displays a "loading..." message
during the load time:

    <script>
      onload = function() {
        var webview = document.getElementById("foo");
        var indicator = document.querySelector(".indicator");

        var loadstart = function() {
          indicator.innerText = "loading...";
        }
        var loadstop = function() {
          indicator.innerText = "";
        }
        webview.addEventListener("did-start-loading", loadstart);
        webview.addEventListener("did-stop-loading", loadstop);
      }
    </script>

Tag Attributes
--------------

The `webview` tag has the following attributes:

### `src`

    <webview src="https://www.github.com/"></webview>

Returns the visible URL. Writing to this attribute initiates top-level
navigation.

Assigning `src` its own value will reload the current page.

The `src` attribute can also accept data URLs, such as
`data:text/plain,Hello, world!`.

### `autosize`

    <webview src="https://www.github.com/" autosize="on" minwidth="576" minheight="432"></webview>

If "on", the `webview` container will automatically resize within the
bounds specified by the attributes `minwidth`, `minheight`, `maxwidth`,
and `maxheight`. These constraints do not impact the `webview` unless
`autosize` is enabled. When `autosize` is enabled, the `webview`
container size cannot be less than the minimum values or greater than
the maximum.

### `nodeintegration`

    <webview src="http://www.google.com/" nodeintegration></webview>

If "on", the guest page in `webview` will have node integration and can
use node APIs like `require` and `process` to access low level system
resources.

**Note:** Node integration will always be disabled in the `webview` if
it is disabled on the parent window.

### `plugins`

    <webview src="https://www.github.com/" plugins></webview>

If "on", the guest page in `webview` will be able to use browser
plugins.

### `preload`

    <webview src="https://www.github.com/" preload="./test.js"></webview>

Specifies a script that will be loaded before other scripts run in the
guest page. The protocol of script's URL must be either `file:` or
`asar:`, because it will be loaded by `require` in guest page under the
hood.

When the guest page doesn't have node integration this script will still
have access to all Node APIs, but global objects injected by Node will
be deleted after this script has finished executing.

### `httpreferrer`

    <webview src="https://www.github.com/" httpreferrer="http://cheng.guru"></webview>

Sets the referrer URL for the guest page.

### `useragent`

    <webview src="https://www.github.com/" useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"></webview>

Sets the user agent for the guest page before the page is navigated to.
Once the page is loaded, use the `setUserAgent` method to change the
user agent.

### `disablewebsecurity`

    <webview src="https://www.github.com/" disablewebsecurity></webview>

If "on", the guest page will have web security disabled.

### partition

    <webview src="https://github.com" partition="persist:github"></webview>
    <webview src="http://electron.atom.io" partition="electron"></webview>

Sets the session used by the page. If `partition` starts with
`persist:`, the page will use a persistent session available to all
pages in the app with the same `partition`. if there is no `persist:`
prefix, the page will use an in-memory session. By assigning the same
`partition`, multiple pages can share the same session. If the
`partition` is unset then default session of the app will be used.

This value can only be modified before the first navigation, since the
session of an active renderer process cannot change. Subsequent attempts
to modify the value will fail with a DOM exception.

### `allowpopups`

    <webview src="https://www.github.com/" allowpopups></webview>

If "on", the guest page will be allowed to open new windows.

### `blinkfeatures`

    <webview src="https://www.github.com/" blinkfeatures="PreciseMemoryInfo, CSSVariables"></webview>

A list of strings which specifies the blink features to be enabled
separated by `,`. The full list of supported feature strings can be
found in the
[setFeatureEnabledFromString](https://code.google.com/p/chromium/codesearch#chromium/src/out/Debug/gen/blink/platform/RuntimeEnabledFeatures.cpp&sq=package:chromium&type=cs&l=527)
function.

Methods
-------

The `webview` tag has the following methods:

**Note:** The webview element must be loaded before using the methods.

**Example**

    webview.addEventListener("dom-ready", function() {
      webview.openDevTools();
    });

### `<webview>.loadURL(url[, options])`

-   `url` URL
-   `options` Object (optional)
    -   `httpReferrer` String - A HTTP Referrer url.
    -   `userAgent` String - A user agent originating the request.
    -   `extraHeaders` String - Extra headers separated by "\\n"

Loads the `url` in the webview, the `url` must contain the protocol
prefix, e.g. the `http://` or `file://`.

### `<webview>.getURL()`

Returns URL of guest page.

### `<webview>.getTitle()`

Returns the title of guest page.

### `<webview>.isLoading()`

Returns a boolean whether guest page is still loading resources.

### `<webview>.isWaitingForResponse()`

Returns a boolean whether the guest page is waiting for a first-response
for the main resource of the page.

### `<webview>.stop()`

Stops any pending navigation.

### `<webview>.reload()`

Reloads the guest page.

### `<webview>.reloadIgnoringCache()`

Reloads the guest page and ignores cache.

### `<webview>.canGoBack()`

Returns a boolean whether the guest page can go back.

### `<webview>.canGoForward()`

Returns a boolean whether the guest page can go forward.

### `<webview>.canGoToOffset(offset)`

-   `offset` Integer

Returns a boolean whether the guest page can go to `offset`.

### `<webview>.clearHistory()`

Clears the navigation history.

### `<webview>.goBack()`

Makes the guest page go back.

### `<webview>.goForward()`

Makes the guest page go forward.

### `<webview>.goToIndex(index)`

-   `index` Integer

Navigates to the specified absolute index.

### `<webview>.goToOffset(offset)`

-   `offset` Integer

Navigates to the specified offset from the "current entry".

### `<webview>.isCrashed()`

Whether the renderer process has crashed.

### `<webview>.setUserAgent(userAgent)`

-   `userAgent` String

Overrides the user agent for the guest page.

### `<webview>.getUserAgent()`

Returns a `String` representing the user agent for guest page.

### `<webview>.insertCSS(css)`

-   `css` String

Injects CSS into the guest page.

### `<webview>.executeJavaScript(code, userGesture, callback)`

-   `code` String
-   `userGesture` Boolean - Default `false`.
-   `callback` Function (optional) - Called after script has
    been executed.
    -   `result`

Evaluates `code` in page. If `userGesture` is set, it will create the
user gesture context in the page. HTML APIs like `requestFullScreen`,
which require user action, can take advantage of this option for
automation.

### `<webview>.openDevTools()`

Opens a DevTools window for guest page.

### `<webview>.closeDevTools()`

Closes the DevTools window of guest page.

### `<webview>.isDevToolsOpened()`

Returns a boolean whether guest page has a DevTools window attached.

### `<webview>.isDevToolsFocused()`

Returns a boolean whether DevTools window of guest page is focused.

### `<webview>.inspectElement(x, y)`

-   `x` Integer
-   `y` Integer

Starts inspecting element at position (`x`, `y`) of guest page.

### `<webview>.inspectServiceWorker()`

Opens the DevTools for the service worker context present in the guest
page.

### `<webview>.setAudioMuted(muted)`

-   `muted` Boolean

Set guest page muted.

### `<webview>.isAudioMuted()`

Returns whether guest page has been muted.

### `<webview>.undo()`

Executes editing command `undo` in page.

### `<webview>.redo()`

Executes editing command `redo` in page.

### `<webview>.cut()`

Executes editing command `cut` in page.

### `<webview>.copy()`

Executes editing command `copy` in page.

### `<webview>.paste()`

Executes editing command `paste` in page.

### `<webview>.pasteAndMatchStyle()`

Executes editing command `pasteAndMatchStyle` in page.

### `<webview>.delete()`

Executes editing command `delete` in page.

### `<webview>.selectAll()`

Executes editing command `selectAll` in page.

### `<webview>.unselect()`

Executes editing command `unselect` in page.

### `<webview>.replace(text)`

-   `text` String

Executes editing command `replace` in page.

### `<webview>.replaceMisspelling(text)`

-   `text` String

Executes editing command `replaceMisspelling` in page.

### `<webview>.insertText(text)`

-   `text` String

Inserts `text` to the focused element.

### `<webview>.findInPage(text[, options])`

-   `text` String - Content to be searched, must not be empty.
-   `options` Object (optional)
    -   `forward` Boolean - Whether to search forward or backward,
        defaults to `true`.
    -   `findNext` Boolean - Whether the operation is first request or a
        follow up, defaults to `false`.
    -   `matchCase` Boolean - Whether search should be case-sensitive,
        defaults to `false`.
    -   `wordStart` Boolean - Whether to look only at the start
        of words. defaults to `false`.
    -   `medialCapitalAsWordStart` Boolean - When combined with
        `wordStart`, accepts a match in the middle of a word if the
        match begins with an uppercase letter followed by a lowercase
        or non-letter. Accepts several other intra-word matches,
        defaults to `false`.

Starts a request to find all matches for the `text` in the web page and
returns an `Integer` representing the request id used for the request.
The result of the request can be obtained by subscribing to
[`found-in-page`](web-view-tag.md#event-found-in-page) event.

### `<webview>.stopFindInPage(action)`

-   `action` String - Specifies the action to take place when ending
    [`<webview>.findInPage`](web-view-tag.md#webviewtagfindinpage) request.
    -   `clearSelection` - Translate the selection into a
        normal selection.
    -   `keepSelection` - Clear the selection.
    -   `activateSelection` - Focus and click the selection node.

Stops any `findInPage` request for the `webview` with the provided
`action`.

### `<webview>.print([options])`

Prints `webview`'s web page. Same with `webContents.print([options])`.

### `<webview>.printToPDF(options, callback)`

Prints webview's web page as PDF, Same with
`webContents.printToPDF(options, callback)`

### `<webview>.send(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Send an asynchronous message to renderer process via `channel`, you can
also send arbitrary arguments. The renderer process can handle the
message by listening to the `channel` event with the `ipcRenderer`
module.

See [webContents.send](web-contents.md#webcontentssendchannel-args) for
examples.

### `<webview>.sendInputEvent(event)`

-   `event` Object

Sends an input `event` to the page.

See
[webContents.sendInputEvent](web-contents.md##webcontentssendinputeventevent)
for detailed description of `event` object.

### `<webview>.getWebContents()`

Returns the [WebContents](web-contents.md) associated with this
`webview`.

DOM events
----------

The following DOM events are available to the `webview` tag:

### Event: 'load-commit'

Returns:

-   `url` String
-   `isMainFrame` Boolean

Fired when a load has committed. This includes navigation within the
current document as well as subframe document-level loads, but does not
include asynchronous resource loads.

### Event: 'did-finish-load'

Fired when the navigation is done, i.e. the spinner of the tab will stop
spinning, and the `onload` event is dispatched.

### Event: 'did-fail-load'

Returns:

-   `errorCode` Integer
-   `errorDescription` String
-   `validatedURL` String

This event is like `did-finish-load`, but fired when the load failed or
was cancelled, e.g. `window.stop()` is invoked.

### Event: 'did-frame-finish-load'

Returns:

-   `isMainFrame` Boolean

Fired when a frame has done navigation.

### Event: 'did-start-loading'

Corresponds to the points in time when the spinner of the tab starts
spinning.

### Event: 'did-stop-loading'

Corresponds to the points in time when the spinner of the tab stops
spinning.

### Event: 'did-get-response-details'

Returns:

-   `status` Boolean
-   `newURL` String
-   `originalURL` String
-   `httpResponseCode` Integer
-   `requestMethod` String
-   `referrer` String
-   `headers` Object

Fired when details regarding a requested resource is available. `status`
indicates socket connection to download the resource.

### Event: 'did-get-redirect-request'

Returns:

-   `oldURL` String
-   `newURL` String
-   `isMainFrame` Boolean

Fired when a redirect was received while requesting a resource.

### Event: 'dom-ready'

Fired when document in the given frame is loaded.

### Event: 'page-title-updated'

Returns:

-   `title` String
-   `explicitSet` Boolean

Fired when page title is set during navigation. `explicitSet` is false
when title is synthesized from file url.

### Event: 'page-favicon-updated'

Returns:

-   `favicons` Array - Array of URLs.

Fired when page receives favicon urls.

### Event: 'enter-html-full-screen'

Fired when page enters fullscreen triggered by HTML API.

### Event: 'leave-html-full-screen'

Fired when page leaves fullscreen triggered by HTML API.

### Event: 'console-message'

Returns:

-   `level` Integer
-   `message` String
-   `line` Integer
-   `sourceId` String

Fired when the guest window logs a console message.

The following example code forwards all log messages to the embedder's
console without regard for log level or other properties.

    webview.addEventListener('console-message', function(e) {
      console.log('Guest page logged a message:', e.message);
    });

### Event: 'found-in-page'

Returns:

-   `result` Object
    -   `requestId` Integer
    -   `finalUpdate` Boolean - Indicates if more responses are
        to follow.
    -   `activeMatchOrdinal` Integer (optional) - Position of the
        active match.
    -   `matches` Integer (optional) - Number of Matches.
    -   `selectionArea` Object (optional) - Coordinates of first
        match region.

Fired when a result is available for
[`webview.findInPage`](web-view-tag.md#webviewtagfindinpage) request.

    webview.addEventListener('found-in-page', function(e) {
      if (e.result.finalUpdate)
        webview.stopFindInPage("keepSelection");
    });

    const rquestId = webview.findInPage("test");

### Event: 'new-window'

Returns:

-   `url` String
-   `frameName` String
-   `disposition` String - Can be `default`, `foreground-tab`,
    `background-tab`, `new-window` and `other`.
-   `options` Object - The options which should be used for creating the
    new `BrowserWindow`.

Fired when the guest page attempts to open a new browser window.

The following example code opens the new url in system's default
browser.

    webview.addEventListener('new-window', function(e) {
      var protocol = require('url').parse(e.url).protocol;
      if (protocol === 'http:' || protocol === 'https:') {
        require('electron').shell.openExternal(e.url);
      }
    });

### Event: 'will-navigate'

Returns:

-   `url` String

Emitted when a user or the page wants to start navigation. It can happen
when the `window.location` object is changed or a user clicks a link in
the page.

This event will not emit when the navigation is started programmatically
with APIs like `<webview>.loadURL` and `<webview>.back`.

It is also not emitted during in-page navigation, such as clicking
anchor links or updating the `window.location.hash`. Use
`did-navigate-in-page` event for this purpose.

Calling `event.preventDefault()` does **NOT** have any effect.

### Event: 'did-navigate'

Returns:

-   `url` String

Emitted when a navigation is done.

This event is not emitted for in-page navigations, such as clicking
anchor links or updating the `window.location.hash`. Use
`did-navigate-in-page` event for this purpose.

### Event: 'did-navigate-in-page'

Returns:

-   `url` String

Emitted when an in-page navigation happened.

When in-page navigation happens, the page URL changes but does not cause
navigation outside of the page. Examples of this occurring are when
anchor links are clicked or when the DOM `hashchange` event is
triggered.

### Event: 'close'

Fired when the guest page attempts to close itself.

The following example code navigates the `webview` to `about:blank` when
the guest attempts to close itself.

    webview.addEventListener('close', function() {
      webview.src = 'about:blank';
    });

### Event: 'ipc-message'

Returns:

-   `channel` String
-   `args` Array

Fired when the guest page has sent an asynchronous message to embedder
page.

With `sendToHost` method and `ipc-message` event you can easily
communicate between guest page and embedder page:

    // In embedder page.
    webview.addEventListener('ipc-message', function(event) {
      console.log(event.channel);
      // Prints "pong"
    });
    webview.send('ping');

    // In guest page.
    var ipcRenderer = require('electron').ipcRenderer;
    ipcRenderer.on('ping', function() {
      ipcRenderer.sendToHost('pong');
    });

### Event: 'crashed'

Fired when the renderer process is crashed.

### Event: 'gpu-crashed'

Fired when the gpu process is crashed.

### Event: 'plugin-crashed'

Returns:

-   `name` String
-   `version` String

Fired when a plugin process is crashed.

### Event: 'destroyed'

Fired when the WebContents is destroyed.

### Event: 'media-started-playing'

Emitted when media starts playing.

### Event: 'media-paused'

Emitted when media is paused or done playing.

### Event: 'did-change-theme-color'

Emitted when a page's theme color changes. This is usually due to
encountering a meta tag:

    <meta name='theme-color' content='#ff0000'>

### Event: 'devtools-opened'

Emitted when DevTools is opened.

### Event: 'devtools-closed'

Emitted when DevTools is closed.

### Event: 'devtools-focused'

Emitted when DevTools is focused / opened.

The `window.open` function
==========================

When `window.open` is called to create a new window in a web page, a new
instance of `BrowserWindow` will be created for the `url` and a proxy
will be returned to `window.open` to let the page have limited control
over it.

The proxy has limited standard functionality implemented to be
compatible with traditional web pages. For full control of the new
window you should create a `BrowserWindow` directly.

The newly created `BrowserWindow` will inherit parent window's options
by default, to override inherited options you can set them in the
`features` string.

### `window.open(url[, frameName][, features])`

-   `url` String
-   `frameName` String (optional)
-   `features` String (optional)

Creates a new window and returns an instance of `BrowserWindowProxy`
class.

The `features` string follows the format of standard browser, but each
feature has to be a field of `BrowserWindow`'s options.

**Note:** Node integration will always be disabled in the opened
`window` if it is disabled on the parent window.

### `window.opener.postMessage(message, targetOrigin)`

-   `message` String
-   `targetOrigin` String

Sends a message to the parent window with the specified origin or `*`
for no origin preference.

Class: BrowserWindowProxy
-------------------------

The `BrowserWindowProxy` object is returned from `window.open` and
provides limited functionality with the child window.

### `BrowserWindowProxy.blur()`

Removes focus from the child window.

### `BrowserWindowProxy.close()`

Forcefully closes the child window without calling its unload event.

### `BrowserWindowProxy.closed`

Set to true after the child window gets closed.

### `BrowserWindowProxy.eval(code)`

-   `code` String

Evaluates the code in the child window.

### `BrowserWindowProxy.focus()`

Focuses the child window (brings the window to front).

### `BrowserWindowProxy.postMessage(message, targetOrigin)`

-   `message` String
-   `targetOrigin` String

Sends a message to the child window with the specified origin or `*` for
no origin preference.

In addition to these methods, the child window implements
`window.opener` object with no properties and a single method.

Technical Differences Between Electron and NW.js (formerly node-webkit)
=======================================================================

**Note: Electron was previously named Atom Shell.**

Like NW.js, Electron provides a platform to write desktop applications
with JavaScript and HTML and has Node integration to grant access to the
low level system from web pages.

But there are also fundamental differences between the two projects that
make Electron a completely separate product from NW.js:

**1. Entry of Application**

In NW.js the main entry point of an application is a web page. You
specify a main page URL in the `package.json` and it is opened in a
browser window as the application's main window.

In Electron, the entry point is a JavaScript script. Instead of
providing a URL directly, you manually create a browser window and load
an HTML file using the API. You also need to listen to window events to
decide when to quit the application.

Electron works more like the Node.js runtime. Electron's APIs are lower
level so you can use it for browser testing in place of
[PhantomJS](http://phantomjs.org/).

**2. Build System**

In order to avoid the complexity of building all of Chromium, Electron
uses
[`libchromiumcontent`](https://github.com/brightray/libchromiumcontent)
to access Chromium's Content API. `libchromiumcontent` is a single
shared library that includes the Chromium Content module and all of its
dependencies. Users don't need a powerful machine to build Electron.

**3. Node Integration**

In NW.js, the Node integration in web pages requires patching Chromium
to work, while in Electron we chose a different way to integrate the
libuv loop with each platform's message loop to avoid hacking Chromium.
See the
[`node_bindings`](https://github.com/electron/electron/tree/master/atom/common)
code for how that was done.

**4. Multi-context**

If you are an experienced NW.js user, you should be familiar with the
concept of Node context and web context. These concepts were invented
because of how NW.js was implemented.

By using the
[multi-context](http://strongloop.com/strongblog/whats-new-node-js-v0-12-multiple-context-execution/)
feature of Node, Electron doesn't introduce a new JavaScript context in
web pages.

Build Instructions (Linux)
==========================

Follow the guidelines below for building Electron on Linux.

Prerequisites
-------------

-   Python 2.7.x. Some distributions like CentOS still use Python 2.6.x
    so you may need to check your Python version with `python -V`.
-   Node.js v0.12.x. There are various ways to install Node. You can
    download source code from [Node.js](http://nodejs.org) and compile
    from source. Doing so permits installing Node on your own home
    directory as a standard user. Or try repositories such as
    [NodeSource](https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories).
-   Clang 3.4 or later.
-   Development headers of GTK+ and libnotify.

On Ubuntu, install the following libraries:

    $ sudo apt-get install build-essential clang libdbus-1-dev libgtk2.0-dev \
                           libnotify-dev libgnome-keyring-dev libgconf2-dev \
                           libasound2-dev libcap-dev libcups2-dev libxtst-dev \
                           libxss1 libnss3-dev gcc-multilib g++-multilib curl

On Fedora, install the following libraries:

    $ sudo yum install clang dbus-devel gtk2-devel libnotify-devel libgnome-keyring-devel \
                       xorg-x11-server-utils libcap-devel cups-devel libXtst-devel \
                       alsa-lib-devel libXrandr-devel GConf2-devel nss-devel

Other distributions may offer similar packages for installation via
package managers such as pacman. Or one can compile from source code.

If You Use Virtual Machines For Building
----------------------------------------

If you plan to build Electron on a virtual machine you will need a
fixed-size device container of at least 25 gigabytes in size.

Getting the Code
----------------

    $ git clone https://github.com/electron/electron.git

Bootstrapping
-------------

The bootstrap script will download all necessary build dependencies and
create the build project files. You must have Python 2.7.x for the
script to succeed. Downloading certain files can take a long time.
Notice that we are using `ninja` to build Electron so there is no
`Makefile` generated.

    $ cd electron
    $ ./script/bootstrap.py -v

### Cross compilation

If you want to build for an `arm` target you should also install the
following dependencies:

    $ sudo apt-get install libc6-dev-armhf-cross linux-libc-dev-armhf-cross \
                           g++-arm-linux-gnueabihf

And to cross compile for `arm` or `ia32` targets, you should pass the
`--target_arch` parameter to the `bootstrap.py` script:

    $ ./script/bootstrap.py -v --target_arch=arm

Building
--------

If you would like to build both `Release` and `Debug` targets:

    $ ./script/build.py

This script will cause a very large Electron executable to be placed in
the directory `out/R`. The file size is in excess of 1.3 gigabytes. This
happens because the Release target binary contains debugging symbols. To
reduce the file size, run the `create-dist.py` script:

    $ ./script/create-dist.py

This will put a working distribution with much smaller file sizes in the
`dist` directory. After running the create-dist.py script, you may want
to remove the 1.3+ gigabyte binary which is still in `out/R`.

You can also build the `Debug` target only:

    $ ./script/build.py -c D

After building is done, you can find the `electron` debug binary under
`out/D`.

Cleaning
--------

To clean the build files:

    $ ./script/clean.py

Troubleshooting
---------------

Make sure you have installed all of the build dependencies.

### Error While Loading Shared Libraries: libtinfo.so.5

Prebulit `clang` will try to link to `libtinfo.so.5`. Depending on the
host architecture, symlink to appropriate `libncurses`:

    $ sudo ln -s /usr/lib/libncurses.so.5 /usr/lib/libtinfo.so.5

Tests
-----

Test your changes conform to the project coding style using:

    $ ./script/cpplint.py

Test functionality using:

    $ ./script/test.py

Build Instructions (OS X)
=========================

Follow the guidelines below for building Electron on OS X.

Prerequisites
-------------

-   OS X &gt;= 10.8
-   [Xcode](https://developer.apple.com/technologies/tools/) &gt;= 5.1
-   [node.js](http://nodejs.org) (external)

If you are using the Python downloaded by Homebrew, you also need to
install following python modules:

-   pyobjc

Getting the Code
----------------

    $ git clone https://github.com/electron/electron.git

Bootstrapping
-------------

The bootstrap script will download all necessary build dependencies and
create the build project files. Notice that we're using
[ninja](https://ninja-build.org/) to build Electron so there is no Xcode
project generated.

    $ cd electron
    $ ./script/bootstrap.py -v

Building
--------

Build both `Release` and `Debug` targets:

    $ ./script/build.py

You can also only build the `Debug` target:

    $ ./script/build.py -c D

After building is done, you can find `Electron.app` under `out/D`.

32bit Support
-------------

Electron can only be built for a 64bit target on OS X and there is no
plan to support 32bit OS X in future.

Tests
-----

Test your changes conform to the project coding style using:

    $ ./script/cpplint.py

Test functionality using:

    $ ./script/test.py

Build Instructions (Windows)
============================

Follow the guidelines below for building Electron on Windows.

Prerequisites
-------------

-   Windows 7 / Server 2008 R2 or higher
-   Visual Studio 2013 with Update 4 - [download VS 2013 Community
    Edition for
    free](https://www.visualstudio.com/news/vs2013-community-vs).
-   [Python 2.7](http://www.python.org/download/releases/2.7/)
-   [Node.js](http://nodejs.org/download/)
-   [Git](http://git-scm.com)

If you don't currently have a Windows installation,
[modern.ie](https://www.modern.ie/en-us/virtualization-tools#downloads)
has timebombed versions of Windows that you can use to build Electron.

Building Electron is done entirely with command-line scripts and cannot
be done with Visual Studio. You can develop Electron with any editor but
support for building with Visual Studio will come in the future.

**Note:** Even though Visual Studio is not used for building, it's still
**required** because we need the build toolchains it provides.

**Note:** Visual Studio 2015 will not work. Please make sure to get MSVS
**2013**.

Getting the Code
----------------

    $ git clone https://github.com/electron/electron.git

Bootstrapping
-------------

The bootstrap script will download all necessary build dependencies and
create the build project files. Notice that we're using `ninja` to build
Electron so there is no Visual Studio project generated.

    $ cd electron
    $ python script\bootstrap.py -v

Building
--------

Build both Release and Debug targets:

    $ python script\build.py

You can also only build the Debug target:

    $ python script\build.py -c D

After building is done, you can find `electron.exe` under `out\D` (debug
target) or under `out\R` (release target).

64bit Build
-----------

To build for the 64bit target, you need to pass `--target_arch=x64` when
running the bootstrap script:

    $ python script\bootstrap.py -v --target_arch=x64

The other building steps are exactly the same.

Tests
-----

Test your changes conform to the project coding style using:

    $ python script\cpplint.py

Test functionality using:

    $ python script\test.py

Tests that include native modules (e.g. `runas`) can't be executed with
the debug build (see
[\#2558](https://github.com/electron/electron/issues/2558) for details),
but they will work with the release build.

To run the tests with the release build use:

    $ python script\test.py -R

Troubleshooting
---------------

### Command xxxx not found

If you encountered an error like `Command xxxx not found`, you may try
to use the `VS2012 Command Prompt` console to execute the build scripts.

### Fatal internal compiler error: C1001

Make sure you have the latest Visual Studio update installed.

### Assertion failed: ((handle))-&gt;activecnt &gt;= 0

If building under Cygwin, you may see `bootstrap.py` failed with
following error:

    Assertion failed: ((handle))->activecnt >= 0, file src\win\pipe.c, line 1430

    Traceback (most recent call last):
      File "script/bootstrap.py", line 87, in <module>
        sys.exit(main())
      File "script/bootstrap.py", line 22, in main
        update_node_modules('.')
      File "script/bootstrap.py", line 56, in update_node_modules
        execute([NPM, 'install'])
      File "/home/zcbenz/codes/raven/script/lib/util.py", line 118, in execute
        raise e
    subprocess.CalledProcessError: Command '['npm.cmd', 'install']' returned non-zero exit status 3

This is caused by a bug when using Cygwin Python and Win32 Node
together. The solution is to use the Win32 Python to execute the
bootstrap script (assuming you have installed Python under
`C:\Python27`):

    $ /cygdrive/c/Python27/python.exe script/bootstrap.py

### LNK1181: cannot open input file 'kernel32.lib'

Try reinstalling 32bit Node.js.

### Error: ENOENT, stat 'C:\\Users\\USERNAME\\AppData\\Roaming\\npm'

Simply making that directory [should fix the
problem](http://stackoverflow.com/a/25095327/102704):

    $ mkdir ~\AppData\Roaming\npm

### node-gyp is not recognized as an internal or external command

You may get this error if you are using Git Bash for building, you
should use PowerShell or VS2012 Command Prompt instead.

Build System Overview
=====================

Electron uses [gyp](https://gyp.gsrc.io/) for project generation and
[ninja](https://ninja-build.org/) for building. Project configurations
can be found in the `.gyp` and `.gypi` files.

Gyp Files
---------

Following `gyp` files contain the main rules for building Electron:

-   `atom.gyp` defines how Electron itself is built.
-   `common.gypi` adjusts the build configurations of Node to make it
    build together with Chromium.
-   `vendor/brightray/brightray.gyp` defines how `brightray` is built
    and includes the default configurations for linking with Chromium.
-   `vendor/brightray/brightray.gypi` includes general build
    configurations about building.

Component Build
---------------

Since Chromium is quite a large project, the final linking stage can
take quite a few minutes, which makes it hard for development. In order
to solve this, Chromium introduced the "component build", which builds
each component as a separate shared library, making linking very quick
but sacrificing file size and performance.

In Electron we took a very similar approach: for `Debug` builds, the
binary will be linked to a shared library version of Chromium's
components to achieve fast linking time; for `Release` builds, the
binary will be linked to the static library versions, so we can have the
best possible binary size and performance.

Minimal Bootstrapping
---------------------

All of Chromium's prebuilt binaries (`libchromiumcontent`) are
downloaded when running the bootstrap script. By default both static
libraries and shared libraries will be downloaded and the final size
should be between 800MB and 2GB depending on the platform.

By default, `libchromiumcontent` is downloaded from Amazon Web Services.
If the `LIBCHROMIUMCONTENT_MIRROR` environment variable is set, the
bootstrap script will download from it.
[`libchromiumcontent-qiniu-mirror`](https://github.com/hokein/libchromiumcontent-qiniu-mirror)
is a mirror for `libchromiumcontent`. If you have trouble in accessing
AWS, you can switch the download address to it via
`export LIBCHROMIUMCONTENT_MIRROR=http://7xk3d2.dl1.z0.glb.clouddn.com/`

If you only want to build Electron quickly for testing or development,
you can download just the shared library versions by passing the `--dev`
parameter:

    $ ./script/bootstrap.py --dev
    $ ./script/build.py -c D

Two-Phase Project Generation
----------------------------

Electron links with different sets of libraries in `Release` and `Debug`
builds. `gyp`, however, doesn't support configuring different link
settings for different configurations.

To work around this Electron uses a `gyp` variable
`libchromiumcontent_component` to control which link settings to use and
only generates one target when running `gyp`.

Target Names
------------

Unlike most projects that use `Release` and `Debug` as target names,
Electron uses `R` and `D` instead. This is because `gyp` randomly
crashes if there is only one `Release` or `Debug` build configuration
defined, and Electron only has to generate one target at a time as
stated above.

This only affects developers, if you are just building Electron for
rebranding you are not affected.

Coding Style
============

These are the style guidelines for coding in Electron.

You can run `npm run lint` to show any style issues detected by
`cpplint` and `eslint`.

C++ and Python
--------------

For C++ and Python, we follow Chromium's [Coding
Style](http://www.chromium.org/developers/coding-style). There is also a
script `script/cpplint.py` to check whether all files conform.

The Python version we are using now is Python 2.7.

The C++ code uses a lot of Chromium's abstractions and types, so it's
recommended to get acquainted with them. A good place to start is
Chromium's [Important Abstractions and Data
Structures](https://www.chromium.org/developers/coding-style/important-abstractions-and-data-structures)
document. The document mentions some special types, scoped types (that
automatically release their memory when going out of scope), logging
mechanisms etc.

JavaScript
----------

-   Write [standard](http://npm.im/standard) JavaScript style.
-   Files should **NOT** end with new line, because we want to match
    Google's styles.
-   File names should be concatenated with `-` instead of `_`, e.g.
    `file-name.js` rather than `file_name.js`, because in
    [github/atom](https://github.com/github/atom) module names are
    usually in the `module-name` form. This rule only applies to
    `.js` files.
-   Use newer ES6/ES2015 syntax where appropriate
    -   [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
        for requires and other constants
    -   [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
        for defining variables
    -   [Arrow
        functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
        instead of `function () { }`
    -   [Template
        literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
        instead of string concatenation using `+`

API Names
---------

When creating a new API, we should prefer getters and setters instead of
jQuery's one-function style. For example, `.getText()` and
`.setText(text)` are preferred to `.text([text])`. There is a
[discussion](https://github.com/electron/electron/issues/46) on this.

Setting Up Symbol Server in Debugger
====================================

Debug symbols allow you to have better debugging sessions. They have
information about the functions contained in executables and dynamic
libraries and provide you with information to get clean call stacks. A
Symbol Server allows the debugger to load the correct symbols, binaries
and sources automatically without forcing users to download large
debugging files. The server functions like [Microsoft's symbol
server](http://support.microsoft.com/kb/311503) so the documentation
there can be useful.

Note that because released Electron builds are heavily optimized,
debugging is not always easy. The debugger will not be able to show you
the content of all variables and the execution path can seem strange
because of inlining, tail calls, and other compiler optimizations. The
only workaround is to build an unoptimized local build.

The official symbol server URL for Electron is
http://54.249.141.255:8086/atom-shell/symbols. You cannot visit this URL
directly, you must add it to the symbol path of your debugging tool. In
the examples below, a local cache directory is used to avoid repeatedly
fetching the PDB from the server. Replace `c:\code\symbols` with an
appropriate cache directory on your machine.

Using the Symbol Server in Windbg
---------------------------------

The Windbg symbol path is configured with a string value delimited with
asterisk characters. To use only the Electron symbol server, add the
following entry to your symbol path (**Note:** you can replace
`c:\code\symbols` with any writable directory on your computer, if you'd
prefer a different location for downloaded symbols):

    SRV*c:\code\symbols\*http://54.249.141.255:8086/atom-shell/symbols

Set this string as `_NT_SYMBOL_PATH` in the environment, using the
Windbg menus, or by typing the `.sympath` command. If you would like to
get symbols from Microsoft's symbol server as well, you should list that
first:

    SRV*c:\code\symbols\*http://msdl.microsoft.com/download/symbols;SRV*c:\code\symbols\*http://54.249.141.255:8086/atom-shell/symbols

Using the symbol server in Visual Studio
----------------------------------------

&lt;img
src='http://mdn.mozillademos.org/files/733/symbol-server-vc8express-menu.jpg'&gt;
&lt;img
src='http://mdn.mozillademos.org/files/2497/2005\_options.gif'&gt;

Troubleshooting: Symbols will not load
--------------------------------------

Type the following commands in Windbg to print why symbols are not
loading:

    > !sym noisy
    > .reload /f chromiumcontent.dll

Source Code Directory Structure
===============================

The source code of Electron is separated into a few parts, mostly
following Chromium on the separation conventions.

You may need to become familiar with [Chromium's multi-process
architecture](http://dev.chromium.org/developers/design-documents/multi-process-architecture)
to understand the source code better.

Structure of Source Code
------------------------

    Electron
    ├── atom - C++ source code.
    |   ├── app - System entry code.
    |   ├── browser - The frontend including the main window, UI, and all of the
    |   |   main process things. This talks to the renderer to manage web pages.
    |   |   ├── ui - Implementation of UI stuff for different platforms.
    |   |   |   ├── cocoa - Cocoa specific source code.
    |   |   |   ├── gtk - GTK+ specific source code.
    |   |   |   └── win - Windows GUI specific source code.
    |   |   ├── api - The implementation of the main process APIs.
    |   |   ├── net - Network related code.
    |   |   ├── mac - Mac specific Objective-C source code.
    |   |   └── resources - Icons, platform-dependent files, etc.
    |   ├── renderer - Code that runs in renderer process.
    |   |   └── api - The implementation of renderer process APIs.
    |   └── common - Code that used by both the main and renderer processes,
    |       including some utility functions and code to integrate node's message
    |       loop into Chromium's message loop.
    |       └── api - The implementation of common APIs, and foundations of
    |           Electron's built-in modules.
    ├── chromium_src - Source code that copied from Chromium.
    ├── default_app - The default page to show when Electron is started without
    |   providing an app.
    ├── docs - Documentations.
    ├── lib  - JavaScript source code.
    |   ├── browser - Javascript main process initialization code.
    |   |   └── api - Javascript API implementation.
    |   ├── common - JavaScript used by both the main and renderer processes
    |   |   └── api - Javascript API implementation.
    |   └── renderer - Javascript renderer process initialization code.
    |       └── api - Javascript API implementation.
    ├── spec - Automatic tests.
    ├── atom.gyp - Building rules of Electron.
    └── common.gypi - Compiler specific settings and building rules for other
        components like `node` and `breakpad`.

Structure of Other Directories
------------------------------

-   **script** - Scripts used for development purpose like building,
    packaging, testing, etc.
-   **tools** - Helper scripts used by gyp files, unlike `script`,
    scripts put here should never be invoked by users directly.
-   **vendor** - Source code of third party dependencies, we didn't use
    `third_party` as name because it would confuse it with the same
    directory in Chromium's source code tree.
-   **node\_modules** - Third party node modules used for building.
-   **out** - Temporary output directory of `ninja`.
-   **dist** - Temporary directory created by `script/create-dist.py`
    script when creating a distribution.
-   **external\_binaries** - Downloaded binaries of third-party
    frameworks which do not support building with `gyp`.

Electron FAQ
============

When will Electron upgrade to latest Chrome?
--------------------------------------------

The Chrome version of Electron is usually bumped within one or two weeks
after a new stable Chrome version gets released.

Also we only use stable channel of Chrome. If an important fix is in
beta or dev channel, we will back-port it.

When will Electron upgrade to latest Node.js?
---------------------------------------------

When a new version of Node.js gets released, we usually wait for about a
month before upgrading the one in Electron. So we can avoid getting
affected by bugs introduced in new Node.js versions, which happens very
often.

New features of Node.js are usually brought by V8 upgrades, since
Electron is using the V8 shipped by Chrome browser, the shiny new
JavaScript feature of a new Node.js version is usually already in
Electron.

How to share data between web pages?
------------------------------------

To share data between web pages (the renderer processes) the simplest
way is to use HTML5 APIs which are already available in browsers. Good
candidates are [Storage
API](https://developer.mozilla.org/en-US/docs/Web/API/Storage),
[`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage),
[`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage),
and
[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

Or you can use the IPC system, which is specific to Electron, to store
objects in the main process as a global variable, and then to access
them from the renderers through the `remote` module:

    // In the main process.
    global.sharedObject = {
      someProperty: 'default value'
    };

    // In page 1.
    require('remote').getGlobal('sharedObject').someProperty = 'new value';

    // In page 2.
    console.log(require('remote').getGlobal('sharedObject').someProperty);

My app's window/tray disappeared after a few minutes.
-----------------------------------------------------

This happens when the variable which is used to store the window/tray
gets garbage collected.

If you encounter this problem, the following articles may prove helpful:

-   [Memory
    Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
-   [Variable
    Scope](https://msdn.microsoft.com/library/bzt2dkta(v=vs.94).aspx)

If you want a quick fix, you can make the variables global by changing
your code from this:

    app.on('ready', function() {
      var tray = new Tray('/path/to/icon.png');
    })

to this:

    var tray = null;
    app.on('ready', function() {
      tray = new Tray('/path/to/icon.png');
    })

I can not use jQuery/RequireJS/Meteor/AngularJS in Electron.
------------------------------------------------------------

Due to the Node.js integration of Electron, there are some extra symbols
inserted into the DOM like `module`, `exports`, `require`. This causes
problems for some libraries since they want to insert the symbols with
the same names.

To solve this, you can turn off node integration in Electron:

    // In the main process.
    var mainWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: false
      }
    });

But if you want to keep the abilities of using Node.js and Electron
APIs, you have to rename the symbols in the page before including other
libraries:

    <head>
    <script>
    window.nodeRequire = require;
    delete window.require;
    delete window.exports;
    delete window.module;
    </script>
    <script type="text/javascript" src="jquery.js"></script>
    </head>

`require('electron').xxx` is undefined.
---------------------------------------

When using Electron's built-in module you might encounter an error like
this:

    > require('electron').webFrame.setZoomFactor(1.0);
    Uncaught TypeError: Cannot read property 'setZoomLevel' of undefined

This is because you have the [npm `electron`
module](https://www.npmjs.com/package/electron) installed either locally
or globally, which overrides Electron's built-in module.

To verify whether you are using the correct built-in module, you can
print the path of the `electron` module:

    console.log(require.resolve('electron'));

and then check if it is in the following form:

    "/path/to/Electron.app/Contents/Resources/atom.asar/renderer/api/lib/exports/electron.js"

If it is something like `node_modules/electron/index.js`, then you have
to either remove the npm `electron` module, or rename it.

    npm uninstall electron
    npm uninstall -g electron

However if your are using the built-in module but still getting this
error, it is very likely you are using the module in the wrong process.
For example `electron.app` can only be used in the main process, while
`electron.webFrame` is only available in renderer processes.

Application Distribution
========================

To distribute your app with Electron, the folder containing your app
should be named `app` and placed under Electron's resources directory
(on OS X it is `Electron.app/Contents/Resources/` and on Linux and
Windows it is `resources/`), like this:

On OS X:

    electron/Electron.app/Contents/Resources/app/
    ├── package.json
    ├── index.js
    └── index.html

On Windows and Linux:

    electron/resources/app
    ├── package.json
    ├── index.js
    └── index.html

Then execute `Electron.app` (or `electron` on Linux, `electron.exe` on
Windows), and Electron will start as your app. The `electron` directory
will then be your distribution to deliver to final users.

Packaging Your App into a File
------------------------------

Apart from shipping your app by copying all of its source files, you can
also package your app into an [asar](https://github.com/atom/asar)
archive to avoid exposing your app's source code to users.

To use an `asar` archive to replace the `app` folder, you need to rename
the archive to `app.asar`, and put it under Electron's resources
directory like below, and Electron will then try to read the archive and
start from it.

On OS X:

    electron/Electron.app/Contents/Resources/
    └── app.asar

On Windows and Linux:

    electron/resources/
    └── app.asar

More details can be found in [Application
packaging](application-packaging.md).

Rebranding with Downloaded Binaries
-----------------------------------

After bundling your app into Electron, you will want to rebrand Electron
before distributing it to users.

### Windows

You can rename `electron.exe` to any name you like, and edit its icon
and other information with tools like
[rcedit](https://github.com/atom/rcedit).

### OS X

You can rename `Electron.app` to any name you want, and you also have to
rename the `CFBundleDisplayName`, `CFBundleIdentifier` and
`CFBundleName` fields in following files:

-   `Electron.app/Contents/Info.plist`
-   `Electron.app/Contents/Frameworks/Electron Helper.app/Contents/Info.plist`

You can also rename the helper app to avoid showing `Electron Helper` in
the Activity Monitor, but make sure you have renamed the helper app's
executable file's name.

The structure of a renamed app would be like:

    MyApp.app/Contents
    ├── Info.plist
    ├── MacOS/
    │   └── MyApp
    └── Frameworks/
        ├── MyApp Helper EH.app
        |   ├── Info.plist
        |   └── MacOS/
        |       └── MyApp Helper EH
        ├── MyApp Helper NP.app
        |   ├── Info.plist
        |   └── MacOS/
        |       └── MyApp Helper NP
        └── MyApp Helper.app
            ├── Info.plist
            └── MacOS/
                └── MyApp Helper

### Linux

You can rename the `electron` executable to any name you like.

Rebranding by Rebuilding Electron from Source
---------------------------------------------

It is also possible to rebrand Electron by changing the product name and
building it from source. To do this you need to modify the `atom.gyp`
file and have a clean rebuild.

### grunt-build-atom-shell

Manually checking out Electron's code and rebuilding could be
complicated, so a Grunt task has been created that will handle this
automatically:
[grunt-build-atom-shell](https://github.com/paulcbetts/grunt-build-atom-shell).

This task will automatically handle editing the `.gyp` file, building
from source, then rebuilding your app's native Node modules to match the
new executable name.

Packaging Tools
---------------

Apart from packaging your app manually, you can also choose to use third
party packaging tools to do the work for you:

-   [electron-packager](https://github.com/maxogden/electron-packager)
-   [electron-builder](https://github.com/loopline-systems/electron-builder)

Application Packaging
=====================

To mitigate [issues](https://github.com/joyent/node/issues/6960) around
long path names on Windows, slightly speed up `require` and conceal your
source code from cursory inspection, you can choose to package your app
into an [asar](https://github.com/atom/asar) archive with little changes
to your source code.

Generating `asar` Archive
-------------------------

An [asar](https://github.com/atom/asar) archive is a simple tar-like
format that concatenates files into a single file. Electron can read
arbitrary files from it without unpacking the whole file.

Steps to package your app into an `asar` archive:

### 1. Install the asar Utility

    $ npm install -g asar

### 2. Package with `asar pack`

    $ asar pack your-app app.asar

Using `asar` Archives
---------------------

In Electron there are two sets of APIs: Node APIs provided by Node.js
and Web APIs provided by Chromium. Both APIs support reading files from
`asar` archives.

### Node API

With special patches in Electron, Node APIs like `fs.readFile` and
`require` treat `asar` archives as virtual directories, and the files in
it as normal files in the filesystem.

For example, suppose we have an `example.asar` archive under `/path/to`:

    $ asar list /path/to/example.asar
    /app.js
    /file.txt
    /dir/module.js
    /static/index.html
    /static/main.css
    /static/jquery.min.js

Read a file in the `asar` archive:

    const fs = require('fs');
    fs.readFileSync('/path/to/example.asar/file.txt');

List all files under the root of the archive:

    const fs = require('fs');
    fs.readdirSync('/path/to/example.asar');

Use a module from the archive:

    require('/path/to/example.asar/dir/module.js');

You can also display a web page in an `asar` archive with
`BrowserWindow`:

    const BrowserWindow = require('electron').BrowserWindow;
    var win = new BrowserWindow({width: 800, height: 600});
    win.loadURL('file:///path/to/example.asar/static/index.html');

### Web API

In a web page, files in an archive can be requested with the `file:`
protocol. Like the Node API, `asar` archives are treated as directories.

For example, to get a file with `$.get`:

    <script>
    var $ = require('./jquery.min.js');
    $.get('file:///path/to/example.asar/file.txt', function(data) {
      console.log(data);
    });
    </script>

### Treating an `asar` Archive as a Normal File

For some cases like verifying the `asar` archive's checksum, we need to
read the content of `asar` archive as file. For this purpose you can use
the built-in `original-fs` module which provides original `fs` APIs
without `asar` support:

    var originalFs = require('original-fs');
    originalFs.readFileSync('/path/to/example.asar');

You can also set `process.noAsar` to `true` to disable the support for
`asar` in the `fs` module:

    process.noAsar = true;
    fs.readFileSync('/path/to/example.asar');

Limitations on Node API
-----------------------

Even though we tried hard to make `asar` archives in the Node API work
like directories as much as possible, there are still limitations due to
the low-level nature of the Node API.

### Archives Are Read-only

The archives can not be modified so all Node APIs that can modify files
will not work with `asar` archives.

### Working Directory Can Not Be Set to Directories in Archive

Though `asar` archives are treated as directories, there are no actual
directories in the filesystem, so you can never set the working
directory to directories in `asar` archives. Passing them as the `cwd`
option of some APIs will also cause errors.

### Extra Unpacking on Some APIs

Most `fs` APIs can read a file or get a file's information from `asar`
archives without unpacking, but for some APIs that rely on passing the
real file path to underlying system calls, Electron will extract the
needed file into a temporary file and pass the path of the temporary
file to the APIs to make them work. This adds a little overhead for
those APIs.

APIs that requires extra unpacking are:

-   `child_process.execFile`
-   `child_process.execFileSync`
-   `fs.open`
-   `fs.openSync`
-   `process.dlopen` - Used by `require` on native modules

### Fake Stat Information of `fs.stat`

The `Stats` object returned by `fs.stat` and its friends on files in
`asar` archives is generated by guessing, because those files do not
exist on the filesystem. So you should not trust the `Stats` object
except for getting file size and checking file type.

### Executing Binaries Inside `asar` Archive

There are Node APIs that can execute binaries like `child_process.exec`,
`child_process.spawn` and `child_process.execFile`, but only `execFile`
is supported to execute binaries inside `asar` archive.

This is because `exec` and `spawn` accept `command` instead of `file` as
input, and `command`s are executed under shell. There is no reliable way
to determine whether a command uses a file in asar archive, and even if
we do, we can not be sure whether we can replace the path in command
without side effects.

Adding Unpacked Files in `asar` Archive
---------------------------------------

As stated above, some Node APIs will unpack the file to filesystem when
calling, apart from the performance issues, it could also lead to false
alerts of virus scanners.

To work around this, you can unpack some files creating archives by
using the `--unpack` option, an example of excluding shared libraries of
native modules is:

    $ asar pack app app.asar --unpack *.node

After running the command, apart from the `app.asar`, there is also an
`app.asar.unpacked` folder generated which contains the unpacked files,
you should copy it together with `app.asar` when shipping it to users.

Debugging the Main Process
==========================

The browser window DevTools can only debug the renderer process scripts
(i.e. the web pages). In order to provide a way to debug the scripts
from the main process, Electron has provided the `--debug` and
`--debug-brk` switches.

Command Line Switches
---------------------

Use the following command line switches to debug Electron's main
process:

### `--debug=[port]`

When this switch is used Electron will listen for V8 debugger protocol
messages on `port`. The default `port` is `5858`.

### `--debug-brk=[port]`

Like `--debug` but pauses the script on the first line.

Use node-inspector for Debugging
--------------------------------

**Note:** Electron doesn't currently work very well with node-inspector,
and the main process will crash if you inspect the `process` object
under node-inspector's console.

### 1. Make sure you have [node-gyp required tools](https://github.com/nodejs/node-gyp#installation) installed

### 2. Install [node-inspector](https://github.com/node-inspector/node-inspector)

    $ npm install node-inspector

### 3. Install a patched version of `node-pre-gyp`

    $ npm install git+https://git@github.com/enlight/node-pre-gyp.git#detect-electron-runtime-in-find

### 4. Recompile the `node-inspector` `v8` modules for electron (change the target to your electron version number)

    $ node_modules/.bin/node-pre-gyp --target=0.36.11 --runtime=electron --fallback-to-build --directory node_modules/v8-debug/ --dist-url=https://atom.io/download/atom-shell reinstall
    $ node_modules/.bin/node-pre-gyp --target=0.36.11 --runtime=electron --fallback-to-build --directory node_modules/v8-profiler/ --dist-url=https://atom.io/download/atom-shell reinstall

See also [How to install native
modules](using-native-node-modules.md#how-to-install-native-modules).

### 5. Enable debug mode for Electron

You can either start Electron with a debug flag like:

    $ electron --debug=5858 your/app

or, to pause your script on the first line:

    $ electron --debug-brk=5858 your/app

### 6. Start the [node-inspector](https://github.com/node-inspector/node-inspector) server using electron

    $ ELECTRON_RUN_AS_NODE=true path/to/electron.exe node_modules/node-inspector/bin/inspector.js

### 7. Load the debugger UI

Open http://127.0.0.1:8080/debug?ws=127.0.0.1:8080&port=5858 in the
Chrome browser. You may have to click pause if starting with debug-brk
to see the entry line.

Desktop Environment Integration
===============================

Different operating systems provide different features for integrating
desktop applications into their desktop environments. For example, on
Windows, applications can put shortcuts in the JumpList of task bar, and
on Mac, applications can put a custom menu in the dock menu.

This guide explains how to integrate your application into those desktop
environments with Electron APIs.

Notifications (Windows, Linux, OS X)
------------------------------------

All three operating systems provide means for applications to send
notifications to the user. Electron conveniently allows developers to
send notifications with the [HTML5 Notification
API](https://notifications.spec.whatwg.org/), using the currently
running operating system's native notification APIs to display it.

**Note:** Since this is an HTML5 API it is only available in the
renderer process.

    var myNotification = new Notification('Title', {
      body: 'Lorem Ipsum Dolor Sit Amet'
    });

    myNotification.onclick = function () {
      console.log('Notification clicked')
    }

While code and user experience across operating systems are similar,
there are fine differences.

### Windows

-   On Windows 10, notifications "just work".
-   On Windows 8.1 and Windows 8, a shortcut to your app, with a
    [Application User Model
    ID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx),
    must be installed to the Start screen. Note, however, that it does
    not need to be pinned to the Start screen.
-   On Windows 7 and below, notifications are not supported. You can
    however send "balloon notifications" using the [Tray
    API](../api/tray.md#traydisplayballoonoptions-windows).

Furthermore, the maximum length for the notification body is 250
characters, with the Windows team recommending that notifications should
be kept to 200 characters.

### Linux

Notifications are sent using `libnotify`, it can show notifications on
any desktop environment that follows [Desktop Notifications
Specification](https://developer.gnome.org/notification-spec/),
including Cinnamon, Enlightenment, Unity, GNOME, KDE.

### OS X

Notifications are straight-forward on OS X, you should however be aware
of [Apple's Human Interface guidelines regarding
notifications](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/OSXHIGuidelines/NotificationCenter.html).

Note that notifications are limited to 256 bytes in size - and will be
truncated if you exceed that limit.

Recent documents (Windows & OS X)
---------------------------------

Windows and OS X provide easy access to a list of recent documents
opened by the application via JumpList or dock menu, respectively.

**JumpList:**

![JumpList Recent
Files](http://i.msdn.microsoft.com/dynimg/IC420538.png)

**Application dock menu:**

&lt;img
src="https://cloud.githubusercontent.com/assets/639601/5069610/2aa80758-6e97-11e4-8cfb-c1a414a10774.png"
height="353" width="428" &gt;

To add a file to recent documents, you can use the
[app.addRecentDocument](../api/app.md#appaddrecentdocumentpath-os-x-windows)
API:

    app.addRecentDocument('/Users/USERNAME/Desktop/work.type');

And you can use
[app.clearRecentDocuments](../api/app.md#appclearrecentdocuments-os-x-windows)
API to empty the recent documents list:

    app.clearRecentDocuments();

### Windows Notes

In order to be able to use this feature on Windows, your application has
to be registered as a handler of the file type of the document,
otherwise the file won't appear in JumpList even after you have added
it. You can find everything on registering your application in
[Application
Registration](http://msdn.microsoft.com/en-us/library/windows/desktop/ee872121(v=vs.85).aspx).

When a user clicks a file from the JumpList, a new instance of your
application will be started with the path of the file added as a command
line argument.

### OS X Notes

When a file is requested from the recent documents menu, the `open-file`
event of `app` module will be emitted for it.

Custom Dock Menu (OS X)
-----------------------

OS X enables developers to specify a custom menu for the dock, which
usually contains some shortcuts for commonly used features of your
application:

**Dock menu of Terminal.app:**

&lt;img
src="https://cloud.githubusercontent.com/assets/639601/5069962/6032658a-6e9c-11e4-9953-aa84006bdfff.png"
height="354" width="341" &gt;

To set your custom dock menu, you can use the `app.dock.setMenu` API,
which is only available on OS X:

    const electron = require('electron');
    const app = electron.app;
    const Menu = electron.Menu;

    var dockMenu = Menu.buildFromTemplate([
      { label: 'New Window', click: function() { console.log('New Window'); } },
      { label: 'New Window with Settings', submenu: [
        { label: 'Basic' },
        { label: 'Pro'}
      ]},
      { label: 'New Command...'}
    ]);
    app.dock.setMenu(dockMenu);

User Tasks (Windows)
--------------------

On Windows you can specify custom actions in the `Tasks` category of
JumpList, as quoted from MSDN:

> Applications define tasks based on both the program's features and the
> key things a user is expected to do with them. Tasks should be
> context-free, in that the application does not need to be running for
> them to work. They should also be the statistically most common
> actions that a normal user would perform in an application, such as
> compose an email message or open the calendar in a mail program,
> create a new document in a word processor, launch an application in a
> certain mode, or launch one of its subcommands. An application should
> not clutter the menu with advanced features that standard users won't
> need or one-time actions such as registration. Do not use tasks for
> promotional items such as upgrades or special offers.
>
> It is strongly recommended that the task list be static. It should
> remain the same regardless of the state or status of the application.
> While it is possible to vary the list dynamically, you should consider
> that this could confuse the user who does not expect that portion of
> the destination list to change.

**Tasks of Internet Explorer:**

![IE](http://i.msdn.microsoft.com/dynimg/IC420539.png)

Unlike the dock menu in OS X which is a real menu, user tasks in Windows
work like application shortcuts such that when user clicks a task, a
program will be executed with specified arguments.

To set user tasks for your application, you can use
[app.setUserTasks](../api/app.md#appsetusertaskstasks-windows) API:

    app.setUserTasks([
      {
        program: process.execPath,
        arguments: '--new-window',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'New Window',
        description: 'Create a new window'
      }
    ]);

To clean your tasks list, just call `app.setUserTasks` with an empty
array:

    app.setUserTasks([]);

The user tasks will still show even after your application closes, so
the icon and program path specified for a task should exist until your
application is uninstalled.

Thumbnail Toolbars
------------------

On Windows you can add a thumbnail toolbar with specified buttons in a
taskbar layout of an application window. It provides users a way to
access to a particular window's command without restoring or activating
the window.

From MSDN, it's illustrated:

> This toolbar is simply the familiar standard toolbar common control.
> It has a maximum of seven buttons. Each button's ID, image, tooltip,
> and state are defined in a structure, which is then passed to the
> taskbar. The application can show, enable, disable, or hide buttons
> from the thumbnail toolbar as required by its current state.
>
> For example, Windows Media Player might offer standard media transport
> controls such as play, pause, mute, and stop.

**Thumbnail toolbar of Windows Media Player:**

![player](https://i-msdn.sec.s-msft.com/dynimg/IC420540.png)

You can use
[BrowserWindow.setThumbarButtons](../api/browser-window.md#winsetthumbarbuttonsbuttons-windows-7)
to set thumbnail toolbar in your application:

    const BrowserWindow = require('electron').BrowserWindow;
    const path = require('path');

    var win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.setThumbarButtons([
      {
        tooltip: "button1",
        icon: path.join(__dirname, 'button1.png'),
        click: function() { console.log("button2 clicked"); }
      },
      {
        tooltip: "button2",
        icon: path.join(__dirname, 'button2.png'),
        flags:['enabled', 'dismissonclick'],
        click: function() { console.log("button2 clicked."); }
      }
    ]);

To clean thumbnail toolbar buttons, just call
`BrowserWindow.setThumbarButtons` with an empty array:

    win.setThumbarButtons([]);

Unity Launcher Shortcuts (Linux)
--------------------------------

In Unity, you can add custom entries to its launcher via modifying the
`.desktop` file, see [Adding Shortcuts to a
Launcher](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles#Adding_shortcuts_to_a_launcher).

**Launcher shortcuts of Audacious:**

![audacious](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles?action=AttachFile&do=get&target=shortcuts.png)

Progress Bar in Taskbar (Windows, OS X, Unity)
----------------------------------------------

On Windows a taskbar button can be used to display a progress bar. This
enables a window to provide progress information to the user without the
user having to switch to the window itself.

On OS X the progress bar will be displayed as a part of the dock icon.

The Unity DE also has a similar feature that allows you to specify the
progress bar in the launcher.

**Progress bar in taskbar button:**

![Taskbar Progress
Bar](https://cloud.githubusercontent.com/assets/639601/5081682/16691fda-6f0e-11e4-9676-49b6418f1264.png)

To set the progress bar for a Window, you can use the
[BrowserWindow.setProgressBar](../api/browser-window.md#winsetprogressbarprogress)
API:

    var window = new BrowserWindow({...});
    window.setProgressBar(0.5);

Icon Overlays in Taskbar (Windows)
----------------------------------

On Windows a taskbar button can use a small overlay to display
application status, as quoted from MSDN:

> Icon overlays serve as a contextual notification of status, and are
> intended to negate the need for a separate notification area status
> icon to communicate that information to the user. For instance, the
> new mail status in Microsoft Outlook, currently shown in the
> notification area, can now be indicated through an overlay on the
> taskbar button. Again, you must decide during your development cycle
> which method is best for your application. Overlay icons are intended
> to supply important, long-standing status or notifications such as
> network status, messenger status, or new mail. The user should not be
> presented with constantly changing overlays or animations.

**Overlay on taskbar button:**

![Overlay on taskbar
button](https://i-msdn.sec.s-msft.com/dynimg/IC420441.png)

To set the overlay icon for a window, you can use the
[BrowserWindow.setOverlayIcon](../api/browser-window.md#winsetoverlayiconoverlay-description-windows-7)
API:

    var window = new BrowserWindow({...});
    window.setOverlayIcon('path/to/overlay.png', 'Description for overlay');

Represented File of Window (OS X)
---------------------------------

On OS X a window can set its represented file, so the file's icon can
show in the title bar and when users Command-Click or Control-Click on
the title a path popup will show.

You can also set the edited state of a window so that the file icon can
indicate whether the document in this window has been modified.

**Represented file popup menu:**

&lt;img
src="https://cloud.githubusercontent.com/assets/639601/5082061/670a949a-6f14-11e4-987a-9aaa04b23c1d.png"
height="232" width="663" &gt;

To set the represented file of window, you can use the
[BrowserWindow.setRepresentedFilename](../api/browser-window.md#winsetrepresentedfilenamefilename-os-x)
and
[BrowserWindow.setDocumentEdited](../api/browser-window.md#winsetdocumenteditededited-os-x)
APIs:

    var window = new BrowserWindow({...});
    window.setRepresentedFilename('/etc/passwd');
    window.setDocumentEdited(true);

DevTools Extension
==================

To make debugging easier, Electron has basic support for the [Chrome
DevTools Extension](https://developer.chrome.com/extensions/devtools).

For most DevTools extensions you can simply download the source code and
use the `BrowserWindow.addDevToolsExtension` API to load them. The
loaded extensions will be remembered so you don't need to call the API
every time when creating a window.

\*\* NOTE: React DevTools does not work, follow the issue here
https://github.com/electron/electron/issues/915 \*\*

For example, to use the [React DevTools
Extension](https://github.com/facebook/react-devtools) , first you need
to download its source code:

    $ cd /some-directory
    $ git clone --recursive https://github.com/facebook/react-devtools.git

Follow the instructions in
[`react-devtools/shells/chrome/Readme.md`](https://github.com/facebook/react-devtools/blob/master/shells/chrome/Readme.md)
to build the extension.

Then you can load the extension in Electron by opening DevTools in any
window, and running the following code in the DevTools console:

    const BrowserWindow = require('electron').remote.BrowserWindow;
    BrowserWindow.addDevToolsExtension('/some-directory/react-devtools/shells/chrome');

To unload the extension, you can call the
`BrowserWindow.removeDevToolsExtension` API with its name and it will
not load the next time you open the DevTools:

    BrowserWindow.removeDevToolsExtension('React Developer Tools');

Format of DevTools Extension
----------------------------

Ideally all DevTools extensions written for the Chrome browser can be
loaded by Electron, but they have to be in a plain directory. For those
packaged with `crx` extensions, there is no way for Electron to load
them unless you find a way to extract them into a directory.

Background Pages
----------------

Currently Electron doesn't support the background pages feature in
Chrome extensions, so some DevTools extensions that rely on this feature
may not work in Electron.

`chrome.*` APIs
---------------

Some Chrome extensions may use `chrome.*` APIs for features and while
there has been some effort to implement those APIs in Electron, not all
have been implemented.

Given that not all `chrome.*` APIs are implemented if the DevTools
extension is using APIs other than `chrome.devtools.*`, the extension is
very likely not to work. You can report failing extensions in the issue
tracker so that we can add support for those APIs.

Mac App Store Submission Guide
==============================

Since v0.34.0, Electron allows submitting packaged apps to the Mac App
Store (MAS). This guide provides information on: how to submit your app
and the limitations of the MAS build.

**Note:** From v0.36.0 there was a bug preventing GPU process to start
after the app being sandboxed, so it is recommended to use v0.35.x
before this bug gets fixed. You can find more about this in [issue
\#3871](https://github.com/electron/electron/issues/3871).

**Note:** Submitting an app to Mac App Store requires enrolling [Apple
Developer
Program](https://developer.apple.com/support/compare-memberships/),
which costs money.

How to Submit Your App
----------------------

The following steps introduce a simple way to submit your app to Mac App
Store. However, these steps do not ensure your app will be approved by
Apple; you still need to read Apple's [Submitting Your
App](https://developer.apple.com/library/mac/documentation/IDEs/Conceptual/AppDistributionGuide/SubmittingYourApp/SubmittingYourApp.html)
guide on how to meet the Mac App Store requirements.

### Get Certificate

To submit your app to the Mac App Store, you first must get a
certificate from Apple. You can follow these [existing
guides](https://github.com/nwjs/nw.js/wiki/Mac-App-Store-%28MAS%29-Submission-Guideline#first-steps)
on web.

### Sign Your App

After getting the certificate from Apple, you can package your app by
following [Application Distribution](application-distribution.md), and
then proceed to signing your app. This step is basically the same with
other programs, but the key is to sign every dependency of Electron one
by one.

First, you need to prepare two entitlements files.

`child.plist`:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
      <dict>
        <key>com.apple.security.app-sandbox</key>
        <true/>
        <key>com.apple.security.inherit</key>
        <true/>
      </dict>
    </plist>

`parent.plist`:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
      <dict>
        <key>com.apple.security.app-sandbox</key>
        <true/>
      </dict>
    </plist>

And then sign your app with the following script:

    #!/bin/bash

    # Name of your app.
    APP="YourApp"
    # The path of you app to sign.
    APP_PATH="/path/to/YouApp.app"
    # The path to the location you want to put the signed package.
    RESULT_PATH="~/Desktop/$APP.pkg"
    # The name of certificates you requested.
    APP_KEY="3rd Party Mac Developer Application: Company Name (APPIDENTITY)"
    INSTALLER_KEY="3rd Party Mac Developer Installer: Company Name (APPIDENTITY)"

    FRAMEWORKS_PATH="$APP_PATH/Contents/Frameworks"

    codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/Electron Framework.framework/Versions/A"
    codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/$APP Helper.app/"
    codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/$APP Helper EH.app/"
    codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/$APP Helper NP.app/"
    if [ -d "$FRAMEWORKS_PATH/Squirrel.framework/Versions/A" ]; then
      # Signing a non-MAS build.
      codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/Mantle.framework/Versions/A"
      codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/ReactiveCocoa.framework/Versions/A"
      codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/Squirrel.framework/Versions/A"
    fi
    codesign -fs "$APP_KEY" --entitlements parent.plist "$APP_PATH"

    productbuild --component "$APP_PATH" /Applications --sign "$INSTALLER_KEY" "$RESULT_PATH"

If you are new to app sandboxing under OS X, you should also read
through Apple's [Enabling App
Sandbox](https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingAppSandbox.html)
to have a basic idea, then add keys for the permissions needed by your
app to the entitlements files.

### Upload Your App and Submit for Review

After signing your app, you can use Application Loader to upload it to
iTunes Connect for processing, making sure you have [created a
record](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/CreatingiTunesConnectRecord.html)
before uploading. Then you can [submit your app for
review](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/SubmittingTheApp.html).

Limitations of MAS Build
------------------------

In order to satisfy all requirements for app sandboxing, the following
modules have been disabled in the MAS build:

-   `crashReporter`
-   `autoUpdater`

and the following behaviors have been changed:

-   Video capture may not work for some machines.
-   Certain accessibility features may not work.
-   Apps will not be aware of DNS changes.

Also, due to the usage of app sandboxing, the resources which can be
accessed by the app are strictly limited; you can read [App
Sandboxing](https://developer.apple.com/app-sandboxing/) for more
information.

Cryptographic Algorithms Used by Electron
-----------------------------------------

Depending on the country and region you are located, Mac App Store may
require documenting the cryptographic algorithms used in your app, and
even ask you to submit a copy of U.S. Encryption Registration (ERN)
approval.

Electron uses following cryptographic algorithms:

-   AES - [NIST SP
    800-38A](http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf),
    [NIST SP
    800-38D](http://csrc.nist.gov/publications/nistpubs/800-38D/SP-800-38D.pdf),
    [RFC 3394](http://www.ietf.org/rfc/rfc3394.txt)
-   HMAC - [FIPS
    198-1](http://csrc.nist.gov/publications/fips/fips198-1/FIPS-198-1_final.pdf)
-   ECDSA - ANS X9.62–2005
-   ECDH - ANS X9.63–2001
-   HKDF - [NIST SP
    800-56C](http://csrc.nist.gov/publications/nistpubs/800-56C/SP-800-56C.pdf)
-   PBKDF2 - [RFC 2898](https://tools.ietf.org/html/rfc2898)
-   RSA - [RFC 3447](http://www.ietf.org/rfc/rfc3447)
-   SHA - [FIPS
    180-4](http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf)
-   Blowfish - https://www.schneier.com/cryptography/blowfish/
-   CAST - [RFC 2144](https://tools.ietf.org/html/rfc2144), [RFC
    2612](https://tools.ietf.org/html/rfc2612)
-   DES - [FIPS
    46-3](http://csrc.nist.gov/publications/fips/fips46-3/fips46-3.pdf)
-   DH - [RFC 2631](https://tools.ietf.org/html/rfc2631)
-   DSA - [ANSI
    X9.30](http://webstore.ansi.org/RecordDetail.aspx?sku=ANSI+X9.30-1%3A1997)
-   EC - [SEC 1](http://www.secg.org/sec1-v2.pdf)
-   IDEA - "On the Design and Security of Block Ciphers" book by X. Lai
-   MD2 - [RFC 1319](http://tools.ietf.org/html/rfc1319)
-   MD4 - [RFC 6150](https://tools.ietf.org/html/rfc6150)
-   MD5 - [RFC 1321](https://tools.ietf.org/html/rfc1321)
-   MDC2 - [ISO/IEC
    10118-2](https://www.openssl.org/docs/manmaster/crypto/mdc2.html)
-   RC2 - [RFC 2268](https://tools.ietf.org/html/rfc2268)
-   RC4 - [RFC 4345](https://tools.ietf.org/html/rfc4345)
-   RC5 - http://people.csail.mit.edu/rivest/Rivest-rc5rev.pdf
-   RIPEMD - [ISO/IEC
    10118-3](http://webstore.ansi.org/RecordDetail.aspx?sku=ISO%2FIEC%2010118-3:2004)

On how to get the ERN approval, you can reference the article: [How to
legally submit an app to Apple’s App Store when it uses encryption (or
how to obtain an
ERN)](https://carouselapps.com/2015/12/15/legally-submit-app-apples-app-store-uses-encryption-obtain-ern/).

Online/Offline Event Detection
==============================

Online and offline event detection can be implemented in the renderer
process using standard HTML5 APIs, as shown in the following example.

*index.js*

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    var onlineStatusWindow;
    app.on('ready', function() {
      onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
      onlineStatusWindow.loadURL('file://' + __dirname + '/online-status.html');
    });

*online-status.html*

    <!DOCTYPE html>
    <html>
    <body>
    <script>
      var alertOnlineStatus = function() {
        window.alert(navigator.onLine ? 'online' : 'offline');
      };

      window.addEventListener('online',  alertOnlineStatus);
      window.addEventListener('offline',  alertOnlineStatus);

      alertOnlineStatus();
    </script>
    </body>
    </html>

There may be instances where you want to respond to these events in the
main process as well. The main process however does not have a
`navigator` object and thus cannot detect these events directly. Using
Electron's inter-process communication utilities, the events can be
forwarded to the main process and handled as needed, as shown in the
following example.

*index.js*

    const electron = require('electron');
    const app = electron.app;
    const ipcMain = electron.ipcMain;
    const BrowserWindow = electron.BrowserWindow;

    var onlineStatusWindow;
    app.on('ready', function() {
      onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
      onlineStatusWindow.loadURL('file://' + __dirname + '/online-status.html');
    });

    ipcMain.on('online-status-changed', function(event, status) {
      console.log(status);
    });

*online-status.html*

    <!DOCTYPE html>
    <html>
    <body>
    <script>
      const ipcRenderer = require('electron').ipcRenderer;
      var updateOnlineStatus = function() {
        ipcRenderer.send('online-status-changed', navigator.onLine ? 'online' : 'offline');
      };

      window.addEventListener('online',  updateOnlineStatus);
      window.addEventListener('offline',  updateOnlineStatus);

      updateOnlineStatus();
    </script>
    </body>
    </html>

Quick Start
===========

Electron enables you to create desktop applications with pure JavaScript
by providing a runtime with rich native (operating system) APIs. You
could see it as a variant of the Node.js runtime that is focused on
desktop applications instead of web servers.

This doesn't mean Electron is a JavaScript binding to graphical user
interface (GUI) libraries. Instead, Electron uses web pages as its GUI,
so you could also see it as a minimal Chromium browser, controlled by
JavaScript.

### Main Process

In Electron, the process that runs `package.json`'s `main` script is
called **the main process**. The script that runs in the main process
can display a GUI by creating web pages.

### Renderer Process

Since Electron uses Chromium for displaying web pages, Chromium's
multi-process architecture is also used. Each web page in Electron runs
in its own process, which is called **the renderer process**.

In normal browsers, web pages usually run in a sandboxed environment and
are not allowed access to native resources. Electron users, however,
have the power to use Node.js APIs in web pages allowing lower level
operating system interactions.

### Differences Between Main Process and Renderer Process

The main process creates web pages by creating `BrowserWindow`
instances. Each `BrowserWindow` instance runs the web page in its own
renderer process. When a `BrowserWindow` instance is destroyed, the
corresponding renderer process is also terminated.

The main process manages all web pages and their corresponding renderer
processes. Each renderer process is isolated and only cares about the
web page running in it.

In web pages, calling native GUI related APIs is not allowed because
managing native GUI resources in web pages is very dangerous and it is
easy to leak resources. If you want to perform GUI operations in a web
page, the renderer process of the web page must communicate with the
main process to request that the main process perform those operations.

In Electron, we have several ways to communicate between the main
process and renderer processes. Like
[`ipcRenderer`](../api/ipc-renderer.md) and
[`ipcMain`](../api/ipc-main.md) modules for sending messages, and the
[remote](../api/remote.md) module for RPC style communication. There is
also an FAQ entry on [how to share data between web
pages](../faq/electron-faq.md#how-to-share-data-between-web-pages).

Write your First Electron App
-----------------------------

Generally, an Electron app is structured like this:

    your-app/
    ├── package.json
    ├── index.js
    └── index.html

The format of `package.json` is exactly the same as that of Node's
modules, and the script specified by the `main` field is the startup
script of your app, which will run the main process. An example of your
`package.json` might look like this:

    {
      "name"    : "your-app",
      "version" : "0.1.0",
      "main"    : "index.js"
    }

**Note**: If the `main` field is not present in `package.json`, Electron
will attempt to load an `index.js`.

The `index.js` should create windows and handle system events, a typical
example being:

    'use strict';

    const electron = require('electron');
    const app = electron.app;  // Module to control application life.
    const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    var mainWindow = null;

    // Quit when all windows are closed.
    app.on('window-all-closed', function() {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform != 'darwin') {
        app.quit();
      }
    });

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    app.on('ready', function() {
      // Create the browser window.
      mainWindow = new BrowserWindow({width: 800, height: 600});

      // and load the index.html of the app.
      mainWindow.loadURL('file://' + __dirname + '/index.html');

      // Open the DevTools.
      mainWindow.webContents.openDevTools();

      // Emitted when the window is closed.
      mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
      });
    });

Finally the `index.html` is the web page you want to show:

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        We are using node <script>document.write(process.versions.node)</script>,
        Chrome <script>document.write(process.versions.chrome)</script>,
        and Electron <script>document.write(process.versions.electron)</script>.
      </body>
    </html>

Run your app
------------

Once you've created your initial `index.js`, `index.html`, and
`package.json` files, you'll probably want to try running your app
locally to test it and make sure it's working as expected.

### electron-prebuilt

If you've installed `electron-prebuilt` globally with `npm`, then you
will only need to run the following in your app's source directory:

    electron .

If you've installed it locally, then run:

    ./node_modules/.bin/electron .

### Manually Downloaded Electron Binary

If you downloaded Electron manually, you can also use the included
binary to execute your app directly.

#### Windows

    $ .\electron\electron.exe your-app\

#### Linux

    $ ./electron/electron your-app/

#### OS X

    $ ./Electron.app/Contents/MacOS/Electron your-app/

`Electron.app` here is part of the Electron's release package, you can
download it from [here](https://github.com/electron/electron/releases).

### Run as a distribution

After you're done writing your app, you can create a distribution by
following the [Application Distribution](./application-distribution.md)
guide and then executing the packaged app.

### Try this Example

Clone and run the code in this tutorial by using the
[`atom/electron-quick-start`](https://github.com/electron/electron-quick-start)
repository.

**Note**: Running this requires [Git](https://git-scm.com) and
[Node.js](https://nodejs.org/en/download/) (which includes
[npm](https://npmjs.org)) on your system.

    # Clone the repository
    $ git clone https://github.com/electron/electron-quick-start
    # Go into the repository
    $ cd electron-quick-start
    # Install dependencies and run the app
    $ npm install && npm start

Supported Platforms
===================

Following platforms are supported by Electron:

### OS X

Only 64bit binaries are provided for OS X, and the minimum OS X version
supported is OS X 10.9.

### Windows

Windows 7 and later are supported, older operating systems are not
supported (and do not work).

Both `x86` and `amd64` (x64) binaries are provided for Windows. Please
note, the `ARM` version of Windows is not supported for now.

### Linux

The prebuilt `ia32`(`i686`) and `x64`(`amd64`) binaries of Electron are
built on Ubuntu 12.04, the `arm` binary is built against ARM v7 with
hard-float ABI and NEON for Debian Wheezy.

Whether the prebuilt binary can run on a distribution depends on whether
the distribution includes the libraries that Electron is linked to on
the building platform, so only Ubuntu 12.04 is guaranteed to work, but
following platforms are also verified to be able to run the prebuilt
binaries of Electron:

-   Ubuntu 12.04 and later
-   Fedora 21
-   Debian 8

Testing Electron with headless CI Systems (Travis CI, Jenkins)
==============================================================

Being based on Chromium, Electron requires a display driver to function.
If Chromium can't find a display driver, Electron will simply fail to
launch - and therefore not executing any of your tests, regardless of
how you are running them. Testing Electron-based apps on Travis, Circle,
Jenkins or similar Systems requires therefore a little bit of
configuration. In essence, we need to use a virtual display driver.

Configuring the Virtual Display Server
--------------------------------------

First, install [Xvfb](https://en.wikipedia.org/wiki/Xvfb). It's a
virtual framebuffer, implementing the X11 display server protocol - it
performs all graphical operations in memory without showing any screen
output, which is exactly what we need.

Then, create a virtual xvfb screen and export an environment variable
called DISPLAY that points to it. Chromium in Electron will
automatically look for `$DISPLAY`, so no further configuration of your
app is required. This step can be automated with Paul Betts's
[xfvb-maybe](https://github.com/paulcbetts/xvfb-maybe): Prepend your
test commands with `xfvb-maybe` and the little tool will automatically
configure xfvb, if required by the current system. On Windows or Mac OS
X, it will simply do nothing.

    ## On Windows or OS X, this just invokes electron-mocha
    ## On Linux, if we are in a headless environment, this will be equivalent
    ## to xvfb-run electron-mocha ./test/*.js
    xvfb-maybe electron-mocha ./test/*.js

### Travis CI

On Travis, your `.travis.yml` should look roughly like this:

    addons:
      apt:
        packages:
          - xvfb

    install:
      - export DISPLAY=':99.0'
      - Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &

### Jenkins

For Jenkins, a [Xfvb plugin is
available](https://wiki.jenkins-ci.org/display/JENKINS/Xvfb+Plugin).

### Circle CI

Circle CI is awesome and has xvfb and `$DISPLAY` [already setup, so no
further configuration is
required](https://circleci.com/docs/environment#browsers).

### AppVeyor

AppVeyor runs on Windows, supporting Selenium, Chromium, Electron and
similar tools out of the box - no configuration is required.

Using Native Node Modules
=========================

The native Node modules are supported by Electron, but since Electron is
using a different V8 version from official Node, you have to manually
specify the location of Electron's headers when building native modules.

Native Node Module Compatibility
--------------------------------

Native modules might break when Node starts using a new version of V8.
To make sure the module you're interested in will work with Electron,
you should check if it supports the internal Node version used by
Electron. You can check what version of Node is used in Electron by
looking it up in the
[releases](https://github.com/electron/electron/releases) page or by
using `process.version` (see [Quick
Start](https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md)
for example).

Consider using [NAN](https://github.com/nodejs/nan/) for your own
modules, since it makes it easier to support multiple versions of Node.
It's also helpful for porting old modules to newer versions of Node so
they can work with Electron.

How to Install Native Modules
-----------------------------

Three ways to install native modules:

### The Easy Way

The most straightforward way to rebuild native modules is via the
[`electron-rebuild`](https://github.com/paulcbetts/electron-rebuild)
package, which handles the manual steps of downloading headers and
building native modules:

    npm install --save-dev electron-rebuild

    # Every time you run "npm install", run this
    ./node_modules/.bin/electron-rebuild

    # On Windows if you have trouble, try:
    .\node_modules\.bin\electron-rebuild.cmd

### The npm Way

You can also use `npm` to install modules. The steps are exactly the
same with Node modules, except that you need to setup some environment
variables:

    export npm_config_disturl=https://atom.io/download/atom-shell
    export npm_config_target=0.33.1
    export npm_config_arch=x64
    export npm_config_runtime=electron
    HOME=~/.electron-gyp npm install module-name

### The node-gyp Way

To build Node modules with headers of Electron, you need to tell
`node-gyp` where to download headers and which version to use:

    $ cd /path-to-module/
    $ HOME=~/.electron-gyp node-gyp rebuild --target=0.29.1 --arch=x64 --dist-url=https://atom.io/download/atom-shell

The `HOME=~/.electron-gyp` changes where to find development headers.
The `--target=0.29.1` is version of Electron. The `--dist-url=...`
specifies where to download the headers. The `--arch=x64` says the
module is built for 64bit system.

Using Pepper Flash Plugin
=========================

Electron now supports the Pepper Flash plugin. To use the Pepper Flash
plugin in Electron, you should manually specify the location of the
Pepper Flash plugin and then enable it in your application.

Prepare a Copy of Flash Plugin
------------------------------

On OS X and Linux, the details of the Pepper Flash plugin can be found
by navigating to `chrome://plugins` in the Chrome browser. Its location
and version are useful for Electron's Pepper Flash support. You can also
copy it to another location.

Add Electron Switch
-------------------

You can directly add `--ppapi-flash-path` and `ppapi-flash-version` to
the Electron command line or by using the `app.commandLine.appendSwitch`
method before the app ready event. Also, add the `plugins` switch of
`browser-window`. For example:

    // Specify flash path.
    // On Windows, it might be /path/to/pepflashplayer.dll
    // On OS X, /path/to/PepperFlashPlayer.plugin
    // On Linux, /path/to/libpepflashplayer.so
    app.commandLine.appendSwitch('ppapi-flash-path', '/path/to/libpepflashplayer.so');

    // Specify flash version, for example, v17.0.0.169
    app.commandLine.appendSwitch('ppapi-flash-version', '17.0.0.169');

    app.on('ready', function() {
      mainWindow = new BrowserWindow({
        'width': 800,
        'height': 600,
        'web-preferences': {
          'plugins': true
        }
      });
      mainWindow.loadURL('file://' + __dirname + '/index.html');
      // Something else
    });

Enable Flash Plugin in a `<webview>` Tag
----------------------------------------

Add `plugins` attribute to `<webview>` tag.

    <webview src="http://www.adobe.com/software/flash/about/" plugins></webview>

Using Selenium and WebDriver
============================

From [ChromeDriver - WebDriver for
Chrome](https://sites.google.com/a/chromium.org/chromedriver/):

> WebDriver is an open source tool for automated testing of web apps
> across many browsers. It provides capabilities for navigating to web
> pages, user input, JavaScript execution, and more. ChromeDriver is a
> standalone server which implements WebDriver's wire protocol for
> Chromium. It is being developed by members of the Chromium and
> WebDriver teams.

In order to use `chromedriver` with Electron you have to tell it where
to find Electron and make it think Electron is the Chrome browser.

Setting up with WebDriverJs
---------------------------

[WebDriverJs](https://code.google.com/p/selenium/wiki/WebDriverJs)
provides a Node package for testing with web driver, we will use it as
an example.

### 1. Start ChromeDriver

First you need to download the `chromedriver` binary, and run it:

    $ ./chromedriver
    Starting ChromeDriver (v2.10.291558) on port 9515
    Only local connections are allowed.

Remember the port number `9515`, which will be used later

### 2. Install WebDriverJS

    $ npm install selenium-webdriver

### 3. Connect to ChromeDriver

The usage of `selenium-webdriver` with Electron is basically the same
with upstream, except that you have to manually specify how to connect
chrome driver and where to find Electron's binary:

    const webdriver = require('selenium-webdriver');

    var driver = new webdriver.Builder()
      // The "9515" is the port opened by chrome driver.
      .usingServer('http://localhost:9515')
      .withCapabilities({
        chromeOptions: {
          // Here is the path to your Electron binary.
          binary: '/Path-to-Your-App.app/Contents/MacOS/Electron',
        }
      })
      .forBrowser('electron')
      .build();

    driver.get('http://www.google.com');
    driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
    driver.findElement(webdriver.By.name('btnG')).click();
    driver.wait(function() {
     return driver.getTitle().then(function(title) {
       return title === 'webdriver - Google Search';
     });
    }, 1000);

    driver.quit();

Setting up with WebdriverIO
---------------------------

[WebdriverIO](http://webdriver.io/) provides a Node package for testing
with web driver.

### 1. Start ChromeDriver

First you need to download the `chromedriver` binary, and run it:

    $ chromedriver --url-base=wd/hub --port=9515
    Starting ChromeDriver (v2.10.291558) on port 9515
    Only local connections are allowed.

Remember the port number `9515`, which will be used later

### 2. Install WebdriverIO

    $ npm install webdriverio

### 3. Connect to chrome driver

    const webdriverio = require('webdriverio');
    var options = {
        host: "localhost", // Use localhost as chrome driver server
        port: 9515,        // "9515" is the port opened by chrome driver.
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
              binary: '/Path-to-Your-App/electron', // Path to your Electron binary.
              args: [/* cli arguments */]           // Optional, perhaps 'app=' + /path/to/your/app/
            }
        }
    };

    var client = webdriverio.remote(options);

    client
        .init()
        .url('http://google.com')
        .setValue('#q', 'webdriverio')
        .click('#btnG')
        .getTitle().then(function(title) {
            console.log('Title was: ' + title);
        })
        .end();

Workflow
--------

To test your application without rebuilding Electron, simply
[place](https://github.com/electron/electron/blob/master/docs/tutorial/application-distribution.md)
your app source into Electron's resource directory.

Alternatively, pass an argument to run with your electron binary that
points to your app's folder. This eliminates the need to copy-paste your
app into Electron's resource directory.

Using Widevine CDM Plugin
=========================

In Electron you can use the Widevine CDM plugin shipped with Chrome
browser.

Getting the plugin
------------------

Electron doesn't ship with the Widevine CDM plugin for license reasons,
to get it, you need to install the official Chrome browser first, which
should match the architecture and Chrome version of the Electron build
you use.

**Note:** The major version of Chrome browser has to be the same with
the Chrome version used by Electron, otherwise the plugin will not work
even though `navigator.plugins` would show it has been loaded.

### Windows & OS X

Open `chrome://components/` in Chrome browser, find `WidevineCdm` and
make sure it is up to date, then you can find all the plugin binaries
from the
`APP_DATA/Google/Chrome/WidevineCDM/VERSION/_platform_specific/PLATFORM_ARCH/`
directory.

`APP_DATA` is system's location for storing app data, on Windows it is
`%LOCALAPPDATA%`, on OS X it is `~/Library/Application Support`.
`VERSION` is Widevine CDM plugin's version string, like `1.4.8.866`.
`PLATFORM` is `mac` or `win`. `ARCH` is `x86` or `x64`.

On Windows the required binaries are `widevinecdm.dll` and
`widevinecdmadapter.dll`, on OS X they are `libwidevinecdm.dylib` and
`widevinecdmadapter.plugin`. You can copy them to anywhere you like, but
they have to be put together.

### Linux

On Linux the plugin binaries are shipped together with Chrome browser,
you can find them under `/opt/google/chrome`, the filenames are
`libwidevinecdm.so` and `libwidevinecdmadapter.so`.

Using the plugin
----------------

After getting the plugin files, you should pass the
`widevinecdmadapter`'s path to Electron with `--widevine-cdm-path`
command line switch, and the plugin's version with
`--widevine-cdm-version` switch.

**Note:** Though only the `widevinecdmadapter` binary is passed to
Electron, the `widevinecdm` binary has to be put aside it.

The command line switches have to be passed before the `ready` event of
`app` module gets emitted, and the page that uses this plugin must have
plugin enabled.

Example code:

    // You have to pass the filename of `widevinecdmadapter` here, it is
    // * `widevinecdmadapter.plugin` on OS X,
    // * `libwidevinecdmadapter.so` on Linux,
    // * `widevinecdmadapter.dll` on Windows.
    app.commandLine.appendSwitch('widevine-cdm-path', '/path/to/widevinecdmadapter.plugin');
    // The version of plugin can be got from `chrome://plugins` page in Chrome.
    app.commandLine.appendSwitch('widevine-cdm-version', '1.4.8.866');

    var mainWindow = null;
    app.on('ready', function() {
      mainWindow = new BrowserWindow({
        webPreferences: {
          // The `plugins` have to be enabled.
          plugins: true
        }
      })
    });

Verifying the plugin
--------------------

To verify whether the plugin works, you can use following ways:

-   Open devtools and check whether `navigator.plugins` includes the
    Widevine CDM plugin.
-   Open https://shaka-player-demo.appspot.com/ and load a manifest that
    uses `Widevine`.
-   Open http://www.dash-player.com/demo/drm-test-area/, check whether
    the page says `bitdash uses Widevine in your browser`, then play
    the video.

Accelerator
===========

An accelerator is a string that represents a keyboard shortcut. It can
contain multiple modifiers and key codes, combined by the `+` character.

Examples:

-   `CommandOrControl+A`
-   `CommandOrControl+Shift+Z`

Platform notice
---------------

On Linux and Windows, the `Command` key does not have any effect so use
`CommandOrControl` which represents `Command` on OS X and `Control` on
Linux and Windows to define some accelerators.

Use `Alt` instead of `Option`. The `Option` key only exists on OS X,
whereas the `Alt` key is available on all platforms.

The `Super` key is mapped to the `Windows` key on Windows and Linux and
`Cmd` on OS X.

Available modifiers
-------------------

-   `Command` (or `Cmd` for short)
-   `Control` (or `Ctrl` for short)
-   `CommandOrControl` (or `CmdOrCtrl` for short)
-   `Alt`
-   `Option`
-   `AltGr`
-   `Shift`
-   `Super`

Available key codes
-------------------

-   `0` to `9`
-   `A` to `Z`
-   `F1` to `F24`
-   Punctuations like `~`, `!`, `@`, `#`, `$`, etc.
-   `Plus`
-   `Space`
-   `Backspace`
-   `Delete`
-   `Insert`
-   `Return` (or `Enter` as alias)
-   `Up`, `Down`, `Left` and `Right`
-   `Home` and `End`
-   `PageUp` and `PageDown`
-   `Escape` (or `Esc` for short)
-   `VolumeUp`, `VolumeDown` and `VolumeMute`
-   `MediaNextTrack`, `MediaPreviousTrack`, `MediaStop` and
    `MediaPlayPause`
-   `PrintScreen`

autoUpdater
===========

This module provides an interface for the `Squirrel` auto-updater
framework.

You can quickly launch a multi-platform release server for distributing
your application by using one of these projects:

-   [electron-release-server](https://github.com/ArekSredzki/electron-release-server):
    *A fully featured, self-hosted release server for electron
    applications, compatible with auto-updater*
-   [squirrel-updates-server](https://github.com/Aluxian/squirrel-updates-server):
    *A simple node.js server for Squirrel.Mac and Squirrel.Windows which
    uses GitHub releases*

Platform notices
----------------

Though `autoUpdater` provides a uniform API for different platforms,
there are still some subtle differences on each platform.

### OS X

On OS X, the `autoUpdater` module is built upon
[Squirrel.Mac](https://github.com/Squirrel/Squirrel.Mac), meaning you
don't need any special setup to make it work. For server-side
requirements, you can read [Server
Support](https://github.com/Squirrel/Squirrel.Mac#server-support).

**Note:** Your application must be signed for automatic updates on Mac
OS X. This is a requirement of `Squirrel.Mac`.

### Windows

On Windows, you have to install your app into a user's machine before
you can use the auto-updater, so it is recommended to use
[grunt-electron-installer](https://github.com/atom/grunt-electron-installer)
module to generate a Windows installer.

The installer generated with Squirrel will create a shortcut icon with
an [Application User Model
ID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx)
in the format of `com.squirrel.PACKAGE_ID.YOUR_EXE_WITHOUT_DOT_EXE`,
examples are `com.squirrel.slack.Slack` and `com.squirrel.code.Code`.
You have to use the same ID for your app with `app.setAppUserModelId`
API, otherwise Windows will not be able to pin your app properly in task
bar.

The server-side setup is also different from OS X. You can read the
documents of
[Squirrel.Windows](https://github.com/Squirrel/Squirrel.Windows) to get
more details.

### Linux

There is no built-in support for auto-updater on Linux, so it is
recommended to use the distribution's package manager to update your
app.

Events
------

The `autoUpdater` object emits the following events:

### Event: 'error'

Returns:

-   `error` Error

Emitted when there is an error while updating.

### Event: 'checking-for-update'

Emitted when checking if an update has started.

### Event: 'update-available'

Emitted when there is an available update. The update is downloaded
automatically.

### Event: 'update-not-available'

Emitted when there is no available update.

### Event: 'update-downloaded'

Returns:

-   `event` Event
-   `releaseNotes` String
-   `releaseName` String
-   `releaseDate` Date
-   `updateURL` String

Emitted when an update has been downloaded.

On Windows only `releaseName` is available.

Methods
-------

The `autoUpdater` object has the following methods:

### `autoUpdater.setFeedURL(url)`

-   `url` String

Sets the `url` and initialize the auto updater. The `url` cannot be
changed once it is set.

### `autoUpdater.checkForUpdates()`

Asks the server whether there is an update. You must call `setFeedURL`
before using this API.

### `autoUpdater.quitAndInstall()`

Restarts the app and installs the update after it has been downloaded.
It should only be called after `update-downloaded` has been emitted.

app
===

The `app` module is responsible for controlling the application's
lifecycle.

The following example shows how to quit the application when the last
window is closed:

    const app = require('electron').app;
    app.on('window-all-closed', function() {
      app.quit();
    });

Events
------

The `app` object emits the following events:

### Event: 'will-finish-launching'

Emitted when the application has finished basic startup. On Windows and
Linux, the `will-finish-launching` event is the same as the `ready`
event; on OS X, this event represents the
`applicationWillFinishLaunching` notification of `NSApplication`. You
would usually set up listeners for the `open-file` and `open-url` events
here, and start the crash reporter and auto updater.

In most cases, you should just do everything in the `ready` event
handler.

### Event: 'ready'

Emitted when Electron has finished initialization.

### Event: 'window-all-closed'

Emitted when all windows have been closed.

This event is only emitted when the application is not going to quit. If
the user pressed `Cmd + Q`, or the developer called `app.quit()`,
Electron will first try to close all the windows and then emit the
`will-quit` event, and in this case the `window-all-closed` event would
not be emitted.

### Event: 'before-quit'

Returns:

-   `event` Event

Emitted before the application starts closing its windows. Calling
`event.preventDefault()` will prevent the default behaviour, which is
terminating the application.

### Event: 'will-quit'

Returns:

-   `event` Event

Emitted when all windows have been closed and the application will quit.
Calling `event.preventDefault()` will prevent the default behaviour,
which is terminating the application.

See the description of the `window-all-closed` event for the differences
between the `will-quit` and `window-all-closed` events.

### Event: 'quit'

Returns:

-   `event` Event
-   `exitCode` Integer

Emitted when the application is quitting.

### Event: 'open-file' *OS X*

Returns:

-   `event` Event
-   `path` String

Emitted when the user wants to open a file with the application. The
`open-file` event is usually emitted when the application is already
open and the OS wants to reuse the application to open the file.
`open-file` is also emitted when a file is dropped onto the dock and the
application is not yet running. Make sure to listen for the `open-file`
event very early in your application startup to handle this case (even
before the `ready` event is emitted).

You should call `event.preventDefault()` if you want to handle this
event.

On Windows, you have to parse `process.argv` (in the main process) to
get the filepath.

### Event: 'open-url' *OS X*

Returns:

-   `event` Event
-   `url` String

Emitted when the user wants to open a URL with the application. The URL
scheme must be registered to be opened by your application.

You should call `event.preventDefault()` if you want to handle this
event.

### Event: 'activate' *OS X*

Returns:

-   `event` Event
-   `hasVisibleWindows` Boolean

Emitted when the application is activated, which usually happens when
clicks on the applications's dock icon.

### Event: 'browser-window-blur'

Returns:

-   `event` Event
-   `window` BrowserWindow

Emitted when a [browserWindow](browser-window.md) gets blurred.

### Event: 'browser-window-focus'

Returns:

-   `event` Event
-   `window` BrowserWindow

Emitted when a [browserWindow](browser-window.md) gets focused.

### Event: 'browser-window-created'

Returns:

-   `event` Event
-   `window` BrowserWindow

Emitted when a new [browserWindow](browser-window.md) is created.

### Event: 'certificate-error'

Returns:

-   `event` Event
-   `webContents` [WebContents](web-contents.md)
-   `url` URL
-   `error` String - The error code
-   `certificate` Object
    -   `data` Buffer - PEM encoded data
    -   `issuerName` String
-   `callback` Function

Emitted when failed to verify the `certificate` for `url`, to trust the
certificate you should prevent the default behavior with
`event.preventDefault()` and call `callback(true)`.

    app.on('certificate-error', function(event, webContents, url, error, certificate, callback) {
      if (url == "https://github.com") {
        // Verification logic.
        event.preventDefault();
        callback(true);
      } else {
        callback(false);
      }
    });

### Event: 'select-client-certificate'

Returns:

-   `event` Event
-   `webContents` [WebContents](web-contents.md)
-   `url` URL
-   `certificateList` \[Objects\]
    -   `data` Buffer - PEM encoded data
    -   `issuerName` String - Issuer's Common Name
-   `callback` Function

Emitted when a client certificate is requested.

The `url` corresponds to the navigation entry requesting the client
certificate and `callback` needs to be called with an entry filtered
from the list. Using `event.preventDefault()` prevents the application
from using the first certificate from the store.

    app.on('select-client-certificate', function(event, webContents, url, list, callback) {
      event.preventDefault();
      callback(list[0]);
    })

### Event: 'login'

Returns:

-   `event` Event
-   `webContents` [WebContents](web-contents.md)
-   `request` Object
    -   `method` String
    -   `url` URL
    -   `referrer` URL
-   `authInfo` Object
    -   `isProxy` Boolean
    -   `scheme` String
    -   `host` String
    -   `port` Integer
    -   `realm` String
-   `callback` Function

Emitted when `webContents` wants to do basic auth.

The default behavior is to cancel all authentications, to override this
you should prevent the default behavior with `event.preventDefault()`
and call `callback(username, password)` with the credentials.

    app.on('login', function(event, webContents, request, authInfo, callback) {
      event.preventDefault();
      callback('username', 'secret');
    })

### Event: 'gpu-process-crashed'

Emitted when the gpu process crashes.

### Event: 'platform-theme-changed' *OS X*

Emitted when the system's Dark Mode theme is toggled.

Methods
-------

The `app` object has the following methods:

**Note:** Some methods are only available on specific operating systems
and are labeled as such.

### `app.quit()`

Try to close all windows. The `before-quit` event will be emitted first.
If all windows are successfully closed, the `will-quit` event will be
emitted and by default the application will terminate.

This method guarantees that all `beforeunload` and `unload` event
handlers are correctly executed. It is possible that a window cancels
the quitting by returning `false` in the `beforeunload` event handler.

### `app.exit(exitCode)`

-   `exitCode` Integer

Exits immediately with `exitCode`.

All windows will be closed immediately without asking user and the
`before-quit` and `will-quit` events will not be emitted.

### `app.focus()`

On Linux, focuses on the first visible window. On OS X, makes the
application the active app. On Windows, focuses on the application's
first window.

### `app.hide()` *OS X*

Hides all application windows without minimizing them.

### `app.show()` *OS X*

Shows application windows after they were hidden. Does not automatically
focus them.

### `app.getAppPath()`

Returns the current application directory.

### `app.getPath(name)`

-   `name` String

Retrieves a path to a special directory or file associated with `name`.
On failure an `Error` is thrown.

You can request the following paths by the name:

-   `home` User's home directory.
-   `appData` Per-user application data directory, which by default
    points to:
    -   `%APPDATA%` on Windows
    -   `$XDG_CONFIG_HOME` or `~/.config` on Linux
    -   `~/Library/Application Support` on OS X
-   `userData` The directory for storing your app's configuration files,
    which by default it is the `appData` directory appended with your
    app's name.
-   `temp` Temporary directory.
-   `exe` The current executable file.
-   `module` The `libchromiumcontent` library.
-   `desktop` The current user's Desktop directory.
-   `documents` Directory for a user's "My Documents".
-   `downloads` Directory for a user's downloads.
-   `music` Directory for a user's music.
-   `pictures` Directory for a user's pictures.
-   `videos` Directory for a user's videos.

### `app.setPath(name, path)`

-   `name` String
-   `path` String

Overrides the `path` to a special directory or file associated with
`name`. If the path specifies a directory that does not exist, the
directory will be created by this method. On failure an `Error` is
thrown.

You can only override paths of a `name` defined in `app.getPath`.

By default, web pages' cookies and caches will be stored under the
`userData` directory. If you want to change this location, you have to
override the `userData` path before the `ready` event of the `app`
module is emitted.

### `app.getVersion()`

Returns the version of the loaded application. If no version is found in
the application's `package.json` file, the version of the current bundle
or executable is returned.

### `app.getName()`

Returns the current application's name, which is the name in the
application's `package.json` file.

Usually the `name` field of `package.json` is a short lowercased name,
according to the npm modules spec. You should usually also specify a
`productName` field, which is your application's full capitalized name,
and which will be preferred over `name` by Electron.

### `app.setName(name)`

-   `name` String

Overrides the current application's name.

### `app.getLocale()`

Returns the current application locale.

**Note:** When distributing your packaged app, you have to also ship the
`locales` folder.

**Note:** On Windows you have to call it after the `ready` events gets
emitted.

### `app.addRecentDocument(path)` *OS X* *Windows*

-   `path` String

Adds `path` to the recent documents list.

This list is managed by the OS. On Windows you can visit the list from
the task bar, and on OS X you can visit it from dock menu.

### `app.clearRecentDocuments()` *OS X* *Windows*

Clears the recent documents list.

### `app.setAsDefaultProtocolClient(protocol)` *OS X* *Windows*

-   `protocol` String - The name of your protocol, without `://`. If you
    want your app to handle `electron://` links, call this method with
    `electron` as the parameter.

This method sets the current executable as the default handler for a
protocol (aka URI scheme). It allows you to integrate your app deeper
into the operating system. Once registered, all links with
`your-protocol://` will be openend with the current executable. The
whole link, including protocol, will be passed to your application as a
parameter.

**Note:** On OS X, you can only register protocols that have been added
to your app's `info.plist`, which can not be modified at runtime. You
can however change the file with a simple text editor or script during
build time. Please refer to [Apple's
documentation](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/TP40009249-102207-TPXREF115)
for details.

The API uses the Windows Registry and LSSetDefaultHandlerForURLScheme
internally.

### `app.removeAsDefaultProtocolClient(protocol)` *Windows*

-   `protocol` String - The name of your protocol, without `://`.

This method checks if the current executable as the default handler for
a protocol (aka URI scheme). If so, it will remove the app as the
default handler.

**Note:** On OS X, removing the app will automatically remove the app as
the default protocol handler.

### `app.setUserTasks(tasks)` *Windows*

-   `tasks` Array - Array of `Task` objects

Adds `tasks` to the
[Tasks](http://msdn.microsoft.com/en-us/library/windows/desktop/dd378460(v=vs.85).aspx#tasks)
category of the JumpList on Windows.

`tasks` is an array of `Task` objects in the following format:

`Task` Object:

-   `program` String - Path of the program to execute, usually you
    should specify `process.execPath` which opens the current program.
-   `arguments` String - The command line arguments when `program`
    is executed.
-   `title` String - The string to be displayed in a JumpList.
-   `description` String - Description of this task.
-   `iconPath` String - The absolute path to an icon to be displayed in
    a JumpList, which can be an arbitrary resource file that contains
    an icon. You can usually specify `process.execPath` to show the icon
    of the program.
-   `iconIndex` Integer - The icon index in the icon file. If an icon
    file consists of two or more icons, set this value to identify
    the icon. If an icon file consists of one icon, this value is 0.

### `app.allowNTLMCredentialsForAllDomains(allow)`

-   `allow` Boolean

Dynamically sets whether to always send credentials for HTTP NTLM or
Negotiate authentication - normally, Electron will only send
NTLM/Kerberos credentials for URLs that fall under "Local Intranet"
sites (i.e. are in the same domain as you). However, this detection
often fails when corporate networks are badly configured, so this lets
you co-opt this behavior and enable it for all URLs.

### `app.makeSingleInstance(callback)`

-   `callback` Function

This method makes your application a Single Instance Application -
instead of allowing multiple instances of your app to run, this will
ensure that only a single instance of your app is running, and other
instances signal this instance and exit.

`callback` will be called with `callback(argv, workingDirectory)` when a
second instance has been executed. `argv` is an Array of the second
instance's command line arguments, and `workingDirectory` is its current
working directory. Usually applications respond to this by making their
primary window focused and non-minimized.

The `callback` is guaranteed to be executed after the `ready` event of
`app` gets emitted.

This method returns `false` if your process is the primary instance of
the application and your app should continue loading. And returns `true`
if your process has sent its parameters to another instance, and you
should immediately quit.

On OS X the system enforces single instance automatically when users try
to open a second instance of your app in Finder, and the `open-file` and
`open-url` events will be emitted for that. However when users start
your app in command line the system's single instance mechanism will be
bypassed and you have to use this method to ensure single instance.

An example of activating the window of primary instance when a second
instance starts:

    var myWindow = null;

    var shouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
      // Someone tried to run a second instance, we should focus our window.
      if (myWindow) {
        if (myWindow.isMinimized()) myWindow.restore();
        myWindow.focus();
      }
    });

    if (shouldQuit) {
      app.quit();
      return;
    }

    // Create myWindow, load the rest of the app, etc...
    app.on('ready', function() {
    });

### `app.setAppUserModelId(id)` *Windows*

-   `id` String

Changes the [Application User Model
ID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx)
to `id`.

### `app.isAeroGlassEnabled()` *Windows*

This method returns `true` if [DWM
composition](https://msdn.microsoft.com/en-us/library/windows/desktop/aa969540.aspx)
(Aero Glass) is enabled, and `false` otherwise. You can use it to
determine if you should create a transparent window or not (transparent
windows won't work correctly when DWM composition is disabled).

Usage example:

    let browserOptions = {width: 1000, height: 800};

    // Make the window transparent only if the platform supports it.
    if (process.platform !== 'win32' || app.isAeroGlassEnabled()) {
      browserOptions.transparent = true;
      browserOptions.frame = false;
    }

    // Create the window.
    win = new BrowserWindow(browserOptions);

    // Navigate.
    if (browserOptions.transparent) {
      win.loadURL('file://' + __dirname + '/index.html');
    } else {
      // No transparency, so we load a fallback that uses basic styles.
      win.loadURL('file://' + __dirname + '/fallback.html');
    }

### `app.isDarkMode()` *OS X*

This method returns `true` if the system is in Dark Mode, and `false`
otherwise.

### `app.commandLine.appendSwitch(switch[, value])`

Append a switch (with optional `value`) to Chromium's command line.

**Note:** This will not affect `process.argv`, and is mainly used by
developers to control some low-level Chromium behaviors.

### `app.commandLine.appendArgument(value)`

Append an argument to Chromium's command line. The argument will be
quoted correctly.

**Note:** This will not affect `process.argv`.

### `app.dock.bounce([type])` *OS X*

-   `type` String (optional) - Can be `critical` or `informational`. The
    default is `informational`

When `critical` is passed, the dock icon will bounce until either the
application becomes active or the request is canceled.

When `informational` is passed, the dock icon will bounce for one
second. However, the request remains active until either the application
becomes active or the request is canceled.

Returns an ID representing the request.

### `app.dock.cancelBounce(id)` *OS X*

-   `id` Integer

Cancel the bounce of `id`.

### `app.dock.setBadge(text)` *OS X*

-   `text` String

Sets the string to be displayed in the dock’s badging area.

### `app.dock.getBadge()` *OS X*

Returns the badge string of the dock.

### `app.dock.hide()` *OS X*

Hides the dock icon.

### `app.dock.show()` *OS X*

Shows the dock icon.

### `app.dock.setMenu(menu)` *OS X*

-   `menu` [Menu](menu.md)

Sets the application's [dock
menu](https://developer.apple.com/library/mac/documentation/Carbon/Conceptual/customizing_docktile/concepts/dockconcepts.html#//apple_ref/doc/uid/TP30000986-CH2-TPXREF103).

### `app.dock.setIcon(image)` *OS X*

-   `image` [NativeImage](native-image.md)

Sets the `image` associated with this dock icon.

BrowserWindow
=============

The `BrowserWindow` class gives you the ability to create a browser
window. For example:

    // In the main process.
    const BrowserWindow = require('electron').BrowserWindow;

    // Or in the renderer process.
    const BrowserWindow = require('electron').remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600, show: false });
    win.on('closed', function() {
      win = null;
    });

    win.loadURL('https://github.com');
    win.show();

You can also create a window without chrome by using [Frameless
Window](frameless-window.md) API.

Class: BrowserWindow
--------------------

`BrowserWindow` is an
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

It creates a new `BrowserWindow` with native properties as set by the
`options`.

### `new BrowserWindow([options])`

-   `options` Object
    -   `width` Integer - Window's width in pixels. Default is `800`.
    -   `height` Integer - Window's height in pixels. Default is `600`.
    -   `x` Integer - Window's left offset from screen. Default is to
        center the window.
    -   `y` Integer - Window's top offset from screen. Default is to
        center the window.
    -   `useContentSize` Boolean - The `width` and `height` would be
        used as web page's size, which means the actual window's size
        will include window frame's size and be slightly larger. Default
        is `false`.
    -   `center` Boolean - Show window in the center of the screen.
    -   `minWidth` Integer - Window's minimum width. Default is `0`.
    -   `minHeight` Integer - Window's minimum height. Default is `0`.
    -   `maxWidth` Integer - Window's maximum width. Default is
        no limit.
    -   `maxHeight` Integer - Window's maximum height. Default is
        no limit.
    -   `resizable` Boolean - Whether window is resizable. Default is
        `true`.
    -   `movable` Boolean - Whether window is movable. This is not
        implemented on Linux. Default is `true`.
    -   `minimizable` Boolean - Whether window is minimizable. This is
        not implemented on Linux. Default is `true`.
    -   `maximizable` Boolean - Whether window is maximizable. This is
        not implemented on Linux. Default is `true`.
    -   `closable` Boolean - Whether window is closable. This is not
        implemented on Linux. Default is `true`.
    -   `alwaysOnTop` Boolean - Whether the window should always stay on
        top of other windows. Default is `false`.
    -   `fullscreen` Boolean - Whether the window should show
        in fullscreen. When explicity set to `false` the fullscreen
        button will be hidden or disabled on OS X. Default is `false`.
    -   `fullscreenable` Boolean - Whether the maximize/zoom button on
        OS X should toggle full screen mode or maximize window. Default
        is `true`.
    -   `skipTaskbar` Boolean - Whether to show the window in taskbar.
        Default is `false`.
    -   `kiosk` Boolean - The kiosk mode. Default is `false`.
    -   `title` String - Default window title. Default is `"Electron"`.
    -   `icon` [NativeImage](native-image.md) - The window icon, when
        omitted on Windows the executable's icon would be used as
        window icon.
    -   `show` Boolean - Whether window should be shown when created.
        Default is `true`.
    -   `frame` Boolean - Specify `false` to create a [Frameless
        Window](frameless-window.md). Default is `true`.
    -   `acceptFirstMouse` Boolean - Whether the web view accepts a
        single mouse-down event that simultaneously activates
        the window. Default is `false`.
    -   `disableAutoHideCursor` Boolean - Whether to hide cursor
        when typing. Default is `false`.
    -   `autoHideMenuBar` Boolean - Auto hide the menu bar unless the
        `Alt` key is pressed. Default is `false`.
    -   `enableLargerThanScreen` Boolean - Enable the window to be
        resized larger than screen. Default is `false`.
    -   `backgroundColor` String - Window's background color as
        Hexadecimal value, like `#66CD00` or `#FFF` or `#80FFFFFF`
        (alpha is supported). Default is `#FFF` (white).
    -   `hasShadow` Boolean - Whether window should have a shadow. This
        is only implemented on OS X. Default is `true`.
    -   `darkTheme` Boolean - Forces using dark theme for the window,
        only works on some GTK+3 desktop environments. Default is
        `false`.
    -   `transparent` Boolean - Makes the window
        [transparent](frameless-window.md). Default is `false`.
    -   `type` String - The type of window, default is normal window.
        See more about this below.
    -   `titleBarStyle` String - The style of window title bar. See more
        about this below.
    -   `webPreferences` Object - Settings of web page's features. See
        more about this below.

The possible values and behaviors of `type` option are platform
dependent, supported values are:

-   On Linux, possible types are `desktop`, `dock`, `toolbar`, `splash`,
    `notification`.
-   On OS X, possible types are `desktop`, `textured`.
    -   The `textured` type adds metal gradient appearance
        (`NSTexturedBackgroundWindowMask`).
    -   The `desktop` type places the window at the desktop background
        window level (`kCGDesktopWindowLevel - 1`). Note that desktop
        window will not receive focus, keyboard or mouse events, but you
        can use `globalShortcut` to receive input sparingly.

The `titleBarStyle` option is only supported on OS X 10.10 Yosemite and
newer. Possible values are:

-   `default` or not specified, results in the standard gray opaque Mac
    title bar.
-   `hidden` results in a hidden title bar and a full size content
    window, yet the title bar still has the standard window controls
    ("traffic lights") in the top left.
-   `hidden-inset` results in a hidden title bar with an alternative
    look where the traffic light buttons are slightly more inset from
    the window edge.

The `webPreferences` option is an object that can have following
properties:

-   `nodeIntegration` Boolean - Whether node integration is enabled.
    Default is `true`.
-   `preload` String - Specifies a script that will be loaded before
    other scripts run in the page. This script will always have access
    to node APIs no matter whether node integration is turned on or off.
    The value should be the absolute file path to the script. When node
    integration is turned off, the preload script can reintroduce Node
    global symbols back to the global scope. See example
    [here](process.md#event-loaded).
-   `session` [Session](session.md#class-session) - Sets the session
    used by the page. Instead of passing the Session object directly,
    you can also choose to use the `partition` option instead, which
    accepts a partition string. When both `session` and `partition` are
    provided, `session` would be preferred. Default is the
    default session.
-   `partition` String - Sets the session used by the page according to
    the session's partition string. If `partition` starts with
    `persist:`, the page will use a persistent session available to all
    pages in the app with the same `partition`. if there is no
    `persist:` prefix, the page will use an in-memory session. By
    assigning the same `partition`, multiple pages can share the
    same session. Default is the default session.
-   `zoomFactor` Number - The default zoom factor of the page, `3.0`
    represents `300%`. Default is `1.0`.
-   `javascript` Boolean - Enables JavaScript support. Default is
    `true`.
-   `webSecurity` Boolean - When setting `false`, it will disable the
    same-origin policy (Usually using testing websites by people), and
    set `allowDisplayingInsecureContent` and
    `allowRunningInsecureContent` to `true` if these two options are not
    set by user. Default is `true`.
-   `allowDisplayingInsecureContent` Boolean - Allow an https page to
    display content like images from http URLs. Default is `false`.
-   `allowRunningInsecureContent` Boolean - Allow a https page to run
    JavaScript, CSS or plugins from http URLs. Default is `false`.
-   `images` Boolean - Enables image support. Default is `true`.
-   `textAreasAreResizable` Boolean - Make TextArea elements resizable.
    Default is `true`.
-   `webgl` Boolean - Enables WebGL support. Default is `true`.
-   `webaudio` Boolean - Enables WebAudio support. Default is `true`.
-   `plugins` Boolean - Whether plugins should be enabled. Default is
    `false`.
-   `experimentalFeatures` Boolean - Enables Chromium's
    experimental features. Default is `false`.
-   `experimentalCanvasFeatures` Boolean - Enables Chromium's
    experimental canvas features. Default is `false`.
-   `directWrite` Boolean - Enables DirectWrite font rendering system
    on Windows. Default is `true`.
-   `blinkFeatures` String - A list of feature strings separated by `,`,
    like `CSSVariables,KeyboardEventKey`. The full list of supported
    feature strings can be found in the
    [setFeatureEnabledFromString](https://code.google.com/p/chromium/codesearch#chromium/src/out/Debug/gen/blink/platform/RuntimeEnabledFeatures.cpp&sq=package:chromium&type=cs&l=527) function.
-   `defaultFontFamily` Object - Sets the default font for
    the font-family.
    -   `standard` String - Defaults to `Times New Roman`.
    -   `serif` String - Defaults to `Times New Roman`.
    -   `sansSerif` String - Defaults to `Arial`.
    -   `monospace` String - Defaults to `Courier New`.
-   `defaultFontSize` Integer - Defaults to `16`.
-   `defaultMonospaceFontSize` Integer - Defaults to `13`.
-   `minimumFontSize` Integer - Defaults to `0`.
-   `defaultEncoding` String - Defaults to `ISO-8859-1`.
-   `backgroundThrottling` Boolean - Whether to throttle animations and
    timers when the page becomes background. Defaults to `true`.

Events
------

The `BrowserWindow` object emits the following events:

**Note:** Some events are only available on specific operating systems
and are labeled as such.

### Event: 'page-title-updated'

Returns:

-   `event` Event

Emitted when the document changed its title, calling
`event.preventDefault()` would prevent the native window's title to
change.

### Event: 'close'

Returns:

-   `event` Event

Emitted when the window is going to be closed. It's emitted before the
`beforeunload` and `unload` event of the DOM. Calling
`event.preventDefault()` will cancel the close.

Usually you would want to use the `beforeunload` handler to decide
whether the window should be closed, which will also be called when the
window is reloaded. In Electron, returning an empty string or `false`
would cancel the close. For example:

    window.onbeforeunload = function(e) {
      console.log('I do not want to be closed');

      // Unlike usual browsers, in which a string should be returned and the user is
      // prompted to confirm the page unload, Electron gives developers more options.
      // Returning empty string or false would prevent the unloading now.
      // You can also use the dialog API to let the user confirm closing the application.
      e.returnValue = false;
    };

### Event: 'closed'

Emitted when the window is closed. After you have received this event
you should remove the reference to the window and avoid using it
anymore.

### Event: 'unresponsive'

Emitted when the web page becomes unresponsive.

### Event: 'responsive'

Emitted when the unresponsive web page becomes responsive again.

### Event: 'blur'

Emitted when the window loses focus.

### Event: 'focus'

Emitted when the window gains focus.

### Event: 'show'

Emitted when the window is shown.

### Event: 'hide'

Emitted when the window is hidden.

### Event: 'maximize'

Emitted when window is maximized.

### Event: 'unmaximize'

Emitted when the window exits from maximized state.

### Event: 'minimize'

Emitted when the window is minimized.

### Event: 'restore'

Emitted when the window is restored from minimized state.

### Event: 'resize'

Emitted when the window is getting resized.

### Event: 'move'

Emitted when the window is getting moved to a new position.

**Note**: On OS X this event is just an alias of `moved`.

### Event: 'moved' *OS X*

Emitted once when the window is moved to a new position.

### Event: 'enter-full-screen'

Emitted when the window enters full screen state.

### Event: 'leave-full-screen'

Emitted when the window leaves full screen state.

### Event: 'enter-html-full-screen'

Emitted when the window enters full screen state triggered by html api.

### Event: 'leave-html-full-screen'

Emitted when the window leaves full screen state triggered by html api.

### Event: 'app-command' *Windows*

Returns:

-   `event` Event
-   `command` String

Emitted when an [App
Command](https://msdn.microsoft.com/en-us/library/windows/desktop/ms646275(v=vs.85).aspx)
is invoked. These are typically related to keyboard media keys or
browser commands, as well as the "Back" button built into some mice on
Windows.

Commands are lowercased with underscores replaced with hyphens and the
`APPCOMMAND_` prefix stripped off. e.g. `APPCOMMAND_BROWSER_BACKWARD` is
emitted as `browser-backward`.

    someWindow.on('app-command', function(e, cmd) {
      // Navigate the window back when the user hits their mouse back button
      if (cmd === 'browser-backward' && someWindow.webContents.canGoBack()) {
        someWindow.webContents.goBack();
      }
    });

### Event: 'scroll-touch-begin' *OS X*

Emitted when scroll wheel event phase has begun.

### Event: 'scroll-touch-end' *OS X*

Emitted when scroll wheel event phase has ended.

### Event: 'swipe' *OS X*

Returns:

-   `event` Event
-   `direction` String

Emitted on 3-finger swipe. Possible directions are `up`, `right`,
`down`, `left`.

Methods
-------

The `BrowserWindow` object has the following methods:

### `BrowserWindow.getAllWindows()`

Returns an array of all opened browser windows.

### `BrowserWindow.getFocusedWindow()`

Returns the window that is focused in this application, otherwise
returns `null`.

### `BrowserWindow.fromWebContents(webContents)`

-   `webContents` [WebContents](web-contents.md)

Find a window according to the `webContents` it owns.

### `BrowserWindow.fromId(id)`

-   `id` Integer

Find a window according to its ID.

### `BrowserWindow.addDevToolsExtension(path)`

-   `path` String

Adds DevTools extension located at `path`, and returns extension's name.

The extension will be remembered so you only need to call this API once,
this API is not for programming use.

### `BrowserWindow.removeDevToolsExtension(name)`

-   `name` String

Remove the DevTools extension whose name is `name`.

Instance Properties
-------------------

Objects created with `new BrowserWindow` have the following properties:

    // In this example `win` is our instance
    var win = new BrowserWindow({ width: 800, height: 600 });

### `win.webContents`

The `WebContents` object this window owns, all web page related events
and operations will be done via it.

See the [`webContents` documentation](web-contents.md) for its methods
and events.

### `win.id`

The unique ID of this window.

Instance Methods
----------------

Objects created with `new BrowserWindow` have the following instance
methods:

**Note:** Some methods are only available on specific operating systems
and are labeled as such.

### `win.destroy()`

Force closing the window, the `unload` and `beforeunload` event won't be
emitted for the web page, and `close` event will also not be emitted for
this window, but it guarantees the `closed` event will be emitted.

### `win.close()`

Try to close the window, this has the same effect with user manually
clicking the close button of the window. The web page may cancel the
close though, see the [close event](#event-close).

### `win.focus()`

Focus on the window.

### `win.blur()`

Remove focus on the window.

### `win.isFocused()`

Returns a boolean, whether the window is focused.

### `win.show()`

Shows and gives focus to the window.

### `win.showInactive()`

Shows the window but doesn't focus on it.

### `win.hide()`

Hides the window.

### `win.isVisible()`

Returns a boolean, whether the window is visible to the user.

### `win.maximize()`

Maximizes the window.

### `win.unmaximize()`

Unmaximizes the window.

### `win.isMaximized()`

Returns a boolean, whether the window is maximized.

### `win.minimize()`

Minimizes the window. On some platforms the minimized window will be
shown in the Dock.

### `win.restore()`

Restores the window from minimized state to its previous state.

### `win.isMinimized()`

Returns a boolean, whether the window is minimized.

### `win.setFullScreen(flag)`

-   `flag` Boolean

Sets whether the window should be in fullscreen mode.

### `win.isFullScreen()`

Returns a boolean, whether the window is in fullscreen mode.

### `win.setAspectRatio(aspectRatio[, extraSize])` *OS X*

-   `aspectRatio` The aspect ratio we want to maintain for some portion
    of the content view.
-   `extraSize` Object (optional) - The extra size not to be included
    while maintaining the aspect ratio.
    -   `width` Integer
    -   `height` Integer

This will have a window maintain an aspect ratio. The extra size allows
a developer to have space, specified in pixels, not included within the
aspect ratio calculations. This API already takes into account the
difference between a window's size and its content size.

Consider a normal window with an HD video player and associated
controls. Perhaps there are 15 pixels of controls on the left edge, 25
pixels of controls on the right edge and 50 pixels of controls below the
player. In order to maintain a 16:9 aspect ratio (standard aspect ratio
for HD @1920x1080) within the player itself we would call this function
with arguments of 16/9 and \[ 40, 50 \]. The second argument doesn't
care where the extra width and height are within the content view--only
that they exist. Just sum any extra width and height areas you have
within the overall content view.

### `win.setBounds(options[, animate])`

-   `options` Object
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer
-   `animate` Boolean (optional) *OS X*

Resizes and moves the window to `width`, `height`, `x`, `y`.

### `win.getBounds()`

Returns an object that contains window's width, height, x and y values.

### `win.setSize(width, height[, animate])`

-   `width` Integer
-   `height` Integer
-   `animate` Boolean (optional) *OS X*

Resizes the window to `width` and `height`.

### `win.getSize()`

Returns an array that contains window's width and height.

### `win.setContentSize(width, height[, animate])`

-   `width` Integer
-   `height` Integer
-   `animate` Boolean (optional) *OS X*

Resizes the window's client area (e.g. the web page) to `width` and
`height`.

### `win.getContentSize()`

Returns an array that contains window's client area's width and height.

### `win.setMinimumSize(width, height)`

-   `width` Integer
-   `height` Integer

Sets the minimum size of window to `width` and `height`.

### `win.getMinimumSize()`

Returns an array that contains window's minimum width and height.

### `win.setMaximumSize(width, height)`

-   `width` Integer
-   `height` Integer

Sets the maximum size of window to `width` and `height`.

### `win.getMaximumSize()`

Returns an array that contains window's maximum width and height.

### `win.setResizable(resizable)`

-   `resizable` Boolean

Sets whether the window can be manually resized by user.

### `win.isResizable()`

Returns whether the window can be manually resized by user.

### `win.setMovable(movable)` *OS X* *Windows*

-   `movable` Boolean

Sets whether the window can be moved by user. On Linux does nothing.

### `win.isMovable()` *OS X* *Windows*

Returns whether the window can be moved by user. On Linux always returns
`true`.

### `win.setMinimizable(minimizable)` *OS X* *Windows*

-   `minimizable` Boolean

Sets whether the window can be manually minimized by user. On Linux does
nothing.

### `win.isMinimizable()` *OS X* *Windows*

Returns whether the window can be manually minimized by user. On Linux
always returns `true`.

### `win.setMaximizable(maximizable)` *OS X* *Windows*

-   `maximizable` Boolean

Sets whether the window can be manually maximized by user. On Linux does
nothing.

### `win.isMaximizable()` *OS X* *Windows*

Returns whether the window can be manually maximized by user. On Linux
always returns `true`.

### `win.setFullScreenable(fullscreenable)`

-   `fullscreenable` Boolean

Sets whether the maximize/zoom window button toggles fullscreen mode or
maximizes the window.

### `win.isFullScreenable()`

Returns whether the maximize/zoom window button toggles fullscreen mode
or maximizes the window.

### `win.setClosable(closable)` *OS X* *Windows*

-   `closable` Boolean

Sets whether the window can be manually closed by user. On Linux does
nothing.

### `win.isClosable()` *OS X* *Windows*

Returns whether the window can be manually closed by user. On Linux
always returns `true`.

### `win.setAlwaysOnTop(flag)`

-   `flag` Boolean

Sets whether the window should show always on top of other windows.
After setting this, the window is still a normal window, not a toolbox
window which can not be focused on.

### `win.isAlwaysOnTop()`

Returns whether the window is always on top of other windows.

### `win.center()`

Moves window to the center of the screen.

### `win.setPosition(x, y[, animate])`

-   `x` Integer
-   `y` Integer
-   `animate` Boolean (optional) *OS X*

Moves window to `x` and `y`.

### `win.getPosition()`

Returns an array that contains window's current position.

### `win.setTitle(title)`

-   `title` String

Changes the title of native window to `title`.

### `win.getTitle()`

Returns the title of the native window.

**Note:** The title of web page can be different from the title of the
native window.

### `win.flashFrame(flag)`

-   `flag` Boolean

Starts or stops flashing the window to attract user's attention.

### `win.setSkipTaskbar(skip)`

-   `skip` Boolean

Makes the window not show in the taskbar.

### `win.setKiosk(flag)`

-   `flag` Boolean

Enters or leaves the kiosk mode.

### `win.isKiosk()`

Returns whether the window is in kiosk mode.

### `win.getNativeWindowHandle()`

Returns the platform-specific handle of the window as `Buffer`.

The native type of the handle is `HWND` on Windows, `NSView*` on OS X,
and `Window` (`unsigned long`) on Linux.

### `win.hookWindowMessage(message, callback)` *Windows*

-   `message` Integer
-   `callback` Function

Hooks a windows message. The `callback` is called when the message is
received in the WndProc.

### `win.isWindowMessageHooked(message)` *Windows*

-   `message` Integer

Returns `true` or `false` depending on whether the message is hooked.

### `win.unhookWindowMessage(message)` *Windows*

-   `message` Integer

Unhook the window message.

### `win.unhookAllWindowMessages()` *Windows*

Unhooks all of the window messages.

### `win.setRepresentedFilename(filename)` *OS X*

-   `filename` String

Sets the pathname of the file the window represents, and the icon of the
file will show in window's title bar.

### `win.getRepresentedFilename()` *OS X*

Returns the pathname of the file the window represents.

### `win.setDocumentEdited(edited)` *OS X*

-   `edited` Boolean

Specifies whether the window’s document has been edited, and the icon in
title bar will become gray when set to `true`.

### `win.isDocumentEdited()` *OS X*

Whether the window's document has been edited.

### `win.focusOnWebView()`

### `win.blurWebView()`

### `win.capturePage([rect, ]callback)`

-   `rect` Object (optional) - The area of page to be captured
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer
-   `callback` Function

Captures a snapshot of the page within `rect`. Upon completion
`callback` will be called with `callback(image)`. The `image` is an
instance of [NativeImage](native-image.md) that stores data of the
snapshot. Omitting `rect` will capture the whole visible page.

### `win.print([options])`

Same as `webContents.print([options])`

### `win.printToPDF(options, callback)`

Same as `webContents.printToPDF(options, callback)`

### `win.loadURL(url[, options])`

Same as `webContents.loadURL(url[, options])`.

### `win.reload()`

Same as `webContents.reload`.

### `win.setMenu(menu)` *Linux* *Windows*

-   `menu` Menu

Sets the `menu` as the window's menu bar, setting it to `null` will
remove the menu bar.

### `win.setProgressBar(progress)`

-   `progress` Double

Sets progress value in progress bar. Valid range is \[0, 1.0\].

Remove progress bar when progress &lt; 0; Change to indeterminate mode
when progress &gt; 1.

On Linux platform, only supports Unity desktop environment, you need to
specify the `*.desktop` file name to `desktopName` field in
`package.json`. By default, it will assume `app.getName().desktop`.

### `win.setOverlayIcon(overlay, description)` *Windows 7+*

-   `overlay` [NativeImage](native-image.md) - the icon to display on
    the bottom right corner of the taskbar icon. If this parameter is
    `null`, the overlay is cleared
-   `description` String - a description that will be provided to
    Accessibility screen readers

Sets a 16 x 16 pixel overlay onto the current taskbar icon, usually used
to convey some sort of application status or to passively notify the
user.

### `win.setHasShadow(hasShadow)` *OS X*

-   `hasShadow` (Boolean)

Sets whether the window should have a shadow. On Windows and Linux does
nothing.

### `win.hasShadow()` *OS X*

Returns whether the window has a shadow. On Windows and Linux always
returns `true`.

### `win.setThumbarButtons(buttons)` *Windows 7+*

-   `buttons` Array

Add a thumbnail toolbar with a specified set of buttons to the thumbnail
image of a window in a taskbar button layout. Returns a `Boolean` object
indicates whether the thumbnail has been added successfully.

The number of buttons in thumbnail toolbar should be no greater than 7
due to the limited room. Once you setup the thumbnail toolbar, the
toolbar cannot be removed due to the platform's limitation. But you can
call the API with an empty array to clean the buttons.

The `buttons` is an array of `Button` objects:

-   `Button` Object
    -   `icon` [NativeImage](native-image.md) - The icon showing in
        thumbnail toolbar.
    -   `click` Function
    -   `tooltip` String (optional) - The text of the button's tooltip.
    -   `flags` Array (optional) - Control specific states and behaviors
        of the button. By default, it is `['enabled']`.

The `flags` is an array that can include following `String`s:

-   `enabled` - The button is active and available to the user.
-   `disabled` - The button is disabled. It is present, but has a visual
    state indicating it will not respond to user action.
-   `dismissonclick` - When the button is clicked, the thumbnail window
    closes immediately.
-   `nobackground` - Do not draw a button border, use only the image.
-   `hidden` - The button is not shown to the user.
-   `noninteractive` - The button is enabled but not interactive; no
    pressed button state is drawn. This value is intended for instances
    where the button is used in a notification.

### `win.showDefinitionForSelection()` *OS X*

Shows pop-up dictionary that searches the selected word on the page.

### `win.setAutoHideMenuBar(hide)`

-   `hide` Boolean

Sets whether the window menu bar should hide itself automatically. Once
set the menu bar will only show when users press the single `Alt` key.

If the menu bar is already visible, calling `setAutoHideMenuBar(true)`
won't hide it immediately.

### `win.isMenuBarAutoHide()`

Returns whether menu bar automatically hides itself.

### `win.setMenuBarVisibility(visible)`

-   `visible` Boolean

Sets whether the menu bar should be visible. If the menu bar is
auto-hide, users can still bring up the menu bar by pressing the single
`Alt` key.

### `win.isMenuBarVisible()`

Returns whether the menu bar is visible.

### `win.setVisibleOnAllWorkspaces(visible)`

-   `visible` Boolean

Sets whether the window should be visible on all workspaces.

**Note:** This API does nothing on Windows.

### `win.isVisibleOnAllWorkspaces()`

Returns whether the window is visible on all workspaces.

**Note:** This API always returns false on Windows.

### `win.setIgnoreMouseEvents(ignore)` *OS X*

-   `ignore` Boolean

Ignore all moused events that happened in the window.

Supported Chrome command line switches
======================================

This page lists the command line switches used by the Chrome browser
that are also supported by Electron. You can use
[app.commandLine.appendSwitch](app.md#appcommandlineappendswitchswitch-value)
to append them in your app's main script before the
[ready](app.md#event-ready) event of [app](app.md) module is emitted:

    const app = require('electron').app;
    app.commandLine.appendSwitch('remote-debugging-port', '8315');
    app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');

    app.on('ready', function() {
      // Your code here
    });

--client-certificate=`path`
---------------------------

Sets the `path` of client certificate file.

--ignore-connections-limit=`domains`
------------------------------------

Ignore the connections limit for `domains` list separated by `,`.

--disable-http-cache
--------------------

Disables the disk cache for HTTP requests.

--remote-debugging-port=`port`
------------------------------

Enables remote debugging over HTTP on the specified `port`.

--js-flags=`flags`
------------------

Specifies the flags passed to JS engine. It has to be passed when
starting Electron if you want to enable the `flags` in the main process.

    $ electron --js-flags="--harmony_proxies --harmony_collections" your-app

--proxy-server=`address:port`
-----------------------------

Use a specified proxy server, which overrides the system setting. This
switch only affects requests with HTTP protocol, including HTTPS and
WebSocket requests. It is also noteworthy that not all proxy servers
support HTTPS and WebSocket requests.

--proxy-bypass-list=`hosts`
---------------------------

Instructs Electron to bypass the proxy server for the given
semi-colon-separated list of hosts. This flag has an effect only if used
in tandem with `--proxy-server`.

For example:

    app.commandLine.appendSwitch('proxy-bypass-list', '<local>;*.google.com;*foo.com;1.2.3.4:5678')

Will use the proxy server for all hosts except for local addresses
(`localhost`, `127.0.0.1` etc.), `google.com` subdomains, hosts that
contain the suffix `foo.com` and anything at `1.2.3.4:5678`.

--proxy-pac-url=`url`
---------------------

Uses the PAC script at the specified `url`.

--no-proxy-server
-----------------

Don't use a proxy server and always make direct connections. Overrides
any other proxy server flags that are passed.

--host-rules=`rules`
--------------------

A comma-separated list of `rules` that control how hostnames are mapped.

For example:

-   `MAP * 127.0.0.1` Forces all hostnames to be mapped to 127.0.0.1
-   `MAP *.google.com proxy` Forces all google.com subdomains to be
    resolved to "proxy".
-   `MAP test.com [::1]:77` Forces "test.com" to resolve to
    IPv6 loopback. Will also force the port of the resulting socket
    address to be 77.
-   `MAP * baz, EXCLUDE www.google.com` Remaps everything to "baz",
    except for "www.google.com".

These mappings apply to the endpoint host in a net request (the TCP
connect and host resolver in a direct connection, and the `CONNECT` in
an HTTP proxy connection, and the endpoint host in a `SOCKS` proxy
connection).

--host-resolver-rules=`rules`
-----------------------------

Like `--host-rules` but these `rules` only apply to the host resolver.

--ignore-certificate-errors
---------------------------

Ignores certificate related errors.

--ppapi-flash-path=`path`
-------------------------

Sets the `path` of the pepper flash plugin.

--ppapi-flash-version=`version`
-------------------------------

Sets the `version` of the pepper flash plugin.

--log-net-log=`path`
--------------------

Enables net log events to be saved and writes them to `path`.

--ssl-version-fallback-min=`version`
------------------------------------

Sets the minimum SSL/TLS version ("tls1", "tls1.1" or "tls1.2") that TLS
fallback will accept.

--cipher-suite-blacklist=`cipher_suites`
----------------------------------------

Specifies comma-separated list of SSL cipher suites to disable.

--disable-renderer-backgrounding
--------------------------------

Prevents Chromium from lowering the priority of invisible pages'
renderer processes.

This flag is global to all renderer processes, if you only want to
disable throttling in one window, you can take the hack of [playing
silent audio](https://github.com/atom/atom/pull/9485/files).

--enable-logging
----------------

Prints Chromium's logging into console.

This switch can not be used in `app.commandLine.appendSwitch` since it
is parsed earlier than user's app is loaded, but you can set the
`ELECTRON_ENABLE_LOGGING` environment variable to achieve the same
effect.

--v=`log_level`
---------------

Gives the default maximal active V-logging level; 0 is the default.
Normally positive values are used for V-logging levels.

This switch only works when `--enable-logging` is also passed.

--vmodule=`pattern`
-------------------

Gives the per-module maximal V-logging levels to override the value
given by `--v`. E.g. `my_module=2,foo*=3` would change the logging level
for all code in source files `my_module.*` and `foo*.*`.

Any pattern containing a forward or backward slash will be tested
against the whole pathname and not just the module. E.g. `*/foo/bar/*=2`
would change the logging level for all code in the source files under a
`foo/bar` directory.

This switch only works when `--enable-logging` is also passed.

clipboard
=========

The `clipboard` module provides methods to perform copy and paste
operations. The following example shows how to write a string to the
clipboard:

    const clipboard = require('electron').clipboard;
    clipboard.writeText('Example String');

On X Window systems, there is also a selection clipboard. To manipulate
it you need to pass `selection` to each method:

    clipboard.writeText('Example String', 'selection');
    console.log(clipboard.readText('selection'));

Methods
-------

The `clipboard` module has the following methods:

**Note:** Experimental APIs are marked as such and could be removed in
future.

### `clipboard.readText([type])`

-   `type` String (optional)

Returns the content in the clipboard as plain text.

### `clipboard.writeText(text[, type])`

-   `text` String
-   `type` String (optional)

Writes the `text` into the clipboard as plain text.

### `clipboard.readHtml([type])`

-   `type` String (optional)

Returns the content in the clipboard as markup.

### `clipboard.writeHtml(markup[, type])`

-   `markup` String
-   `type` String (optional)

Writes `markup` to the clipboard.

### `clipboard.readImage([type])`

-   `type` String (optional)

Returns the content in the clipboard as a
[NativeImage](native-image.md).

### `clipboard.writeImage(image[, type])`

-   `image` [NativeImage](native-image.md)
-   `type` String (optional)

Writes `image` to the clipboard.

### `clipboard.readRtf([type])`

-   `type` String (optional)

Returns the content in the clipboard as RTF.

### `clipboard.writeRtf(text[, type])`

-   `text` String
-   `type` String (optional)

Writes the `text` into the clipboard in RTF.

### `clipboard.clear([type])`

-   `type` String (optional)

Clears the clipboard content.

### `clipboard.availableFormats([type])`

-   `type` String (optional)

Returns an array of supported formats for the clipboard `type`.

### `clipboard.has(data[, type])` *Experimental*

-   `data` String
-   `type` String (optional)

Returns whether the clipboard supports the format of specified `data`.

    console.log(clipboard.has('<p>selection</p>'));

### `clipboard.read(data[, type])` *Experimental*

-   `data` String
-   `type` String (optional)

Reads `data` from the clipboard.

### `clipboard.write(data[, type])`

-   `data` Object
    -   `text` String
    -   `html` String
    -   `image` [NativeImage](native-image.md)
-   `type` String (optional)

&lt;!-- --&gt;

    clipboard.write({text: 'test', html: "<b>test</b>"});

Writes `data` to the clipboard.

contentTracing
==============

The `content-tracing` module is used to collect tracing data generated
by the underlying Chromium content module. This module does not include
a web interface so you need to open `chrome://tracing/` in a Chrome
browser and load the generated file to view the result.

    const contentTracing = require('electron').contentTracing;

    const options = {
      categoryFilter: '*',
      traceOptions: 'record-until-full,enable-sampling'
    }

    contentTracing.startRecording(options, function() {
      console.log('Tracing started');

      setTimeout(function() {
        contentTracing.stopRecording('', function(path) {
          console.log('Tracing data recorded to ' + path);
        });
      }, 5000);
    });

Methods
-------

The `content-tracing` module has the following methods:

### `contentTracing.getCategories(callback)`

-   `callback` Function

Get a set of category groups. The category groups can change as new code
paths are reached.

Once all child processes have acknowledged the `getCategories` request
the `callback` is invoked with an array of category groups.

### `contentTracing.startRecording(options, callback)`

-   `options` Object
    -   `categoryFilter` String
    -   `traceOptions` String
-   `callback` Function

Start recording on all processes.

Recording begins immediately locally and asynchronously on child
processes as soon as they receive the EnableRecording request. The
`callback` will be called once all child processes have acknowledged the
`startRecording` request.

`categoryFilter` is a filter to control what category groups should be
traced. A filter can have an optional `-` prefix to exclude category
groups that contain a matching category. Having both included and
excluded category patterns in the same list is not supported.

Examples:

-   `test_MyTest*`,
-   `test_MyTest*,test_OtherStuff`,
-   `"-excluded_category1,-excluded_category2`

`traceOptions` controls what kind of tracing is enabled, it is a
comma-delimited list. Possible options are:

-   `record-until-full`
-   `record-continuously`
-   `trace-to-console`
-   `enable-sampling`
-   `enable-systrace`

The first 3 options are trace recoding modes and hence mutually
exclusive. If more than one trace recording modes appear in the
`traceOptions` string, the last one takes precedence. If none of the
trace recording modes are specified, recording mode is
`record-until-full`.

The trace option will first be reset to the default option
(`record_mode` set to `record-until-full`, `enable_sampling` and
`enable_systrace` set to `false`) before options parsed from
`traceOptions` are applied on it.

### `contentTracing.stopRecording(resultFilePath, callback)`

-   `resultFilePath` String
-   `callback` Function

Stop recording on all processes.

Child processes typically cache trace data and only rarely flush and
send trace data back to the main process. This helps to minimize the
runtime overhead of tracing since sending trace data over IPC can be an
expensive operation. So, to end tracing, we must asynchronously ask all
child processes to flush any pending trace data.

Once all child processes have acknowledged the `stopRecording` request,
`callback` will be called with a file that contains the traced data.

Trace data will be written into `resultFilePath` if it is not empty or
into a temporary file. The actual file path will be passed to `callback`
if it's not `null`.

### `contentTracing.startMonitoring(options, callback)`

-   `options` Object
    -   `categoryFilter` String
    -   `traceOptions` String
-   `callback` Function

Start monitoring on all processes.

Monitoring begins immediately locally and asynchronously on child
processes as soon as they receive the `startMonitoring` request.

Once all child processes have acknowledged the `startMonitoring` request
the `callback` will be called.

### `contentTracing.stopMonitoring(callback)`

-   `callback` Function

Stop monitoring on all processes.

Once all child processes have acknowledged the `stopMonitoring` request
the `callback` is called.

### `contentTracing.captureMonitoringSnapshot(resultFilePath, callback)`

-   `resultFilePath` String
-   `callback` Function

Get the current monitoring traced data.

Child processes typically cache trace data and only rarely flush and
send trace data back to the main process. This is because it may be an
expensive operation to send the trace data over IPC and we would like to
avoid unneeded runtime overhead from tracing. So, to end tracing, we
must asynchronously ask all child processes to flush any pending trace
data.

Once all child processes have acknowledged the
`captureMonitoringSnapshot` request the `callback` will be called with a
file that contains the traced data.

### `contentTracing.getTraceBufferUsage(callback)`

-   `callback` Function

Get the maximum usage across processes of trace buffer as a percentage
of the full state. When the TraceBufferUsage value is determined the
`callback` is called.

### `contentTracing.setWatchEvent(categoryName, eventName, callback)`

-   `categoryName` String
-   `eventName` String
-   `callback` Function

`callback` will be called every time the given event occurs on any
process.

### `contentTracing.cancelWatchEvent()`

Cancel the watch event. This may lead to a race condition with the watch
event callback if tracing is enabled.

crashReporter
=============

The `crash-reporter` module enables sending your app's crash reports.

The following is an example of automatically submitting a crash report
to a remote server:

    const crashReporter = require('electron').crashReporter;

    crashReporter.start({
      productName: 'YourName',
      companyName: 'YourCompany',
      submitURL: 'https://your-domain.com/url-to-submit',
      autoSubmit: true
    });

For setting up a server to accept and process crash reports, you can use
following projects:

-   [socorro](https://github.com/mozilla/socorro)
-   [mini-breakpad-server](https://github.com/atom/mini-breakpad-server)

Methods
-------

The `crash-reporter` module has the following methods:

### `crashReporter.start(options)`

-   `options` Object
    -   `companyName` String
    -   `submitURL` String - URL that crash reports will be sent to
        as POST.
    -   `productName` String (optional) - Default is `Electron`.
    -   `autoSubmit` Boolean - Send the crash report without
        user interaction. Default is `true`.
    -   `ignoreSystemCrashHandler` Boolean - Default is `false`.
    -   `extra` Object - An object you can define that will be sent
        along with the report. Only string properties are sent
        correctly, Nested objects are not supported.

You are required to call this method before using other `crashReporter`
APIs.

**Note:** On OS X, Electron uses a new `crashpad` client, which is
different from `breakpad` on Windows and Linux. To enable the crash
collection feature, you are required to call the `crashReporter.start`
API to initialize `crashpad` in the main process and in each renderer
process from which you wish to collect crash reports.

### `crashReporter.getLastCrashReport()`

Returns the date and ID of the last crash report. If no crash reports
have been sent or the crash reporter has not been started, `null` is
returned.

### `crashReporter.getUploadedReports()`

Returns all uploaded crash reports. Each report contains the date and
uploaded ID.

crash-reporter Payload
----------------------

The crash reporter will send the following data to the `submitURL` as a
`multipart/form-data` `POST`:

-   `ver` String - The version of Electron.
-   `platform` String - e.g. 'win32'.
-   `process_type` String - e.g. 'renderer'.
-   `guid` String - e.g. '5e1286fc-da97-479e-918b-6bfb0c3d1c72'
-   `_version` String - The version in `package.json`.
-   `_productName` String - The product name in the `crashReporter`
    `options` object.
-   `prod` String - Name of the underlying product. In this
    case Electron.
-   `_companyName` String - The company name in the `crashReporter`
    `options` object.
-   `upload_file_minidump` File - The crash report in the format of
    `minidump`.
-   All level one properties of the `extra` object in the
    `crashReporter`. `options` object

desktopCapturer
===============

The `desktopCapturer` module can be used to get available sources that
can be used to be captured with `getUserMedia`.

    // In the renderer process.
    var desktopCapturer = require('electron').desktopCapturer;

    desktopCapturer.getSources({types: ['window', 'screen']}, function(error, sources) {
      if (error) throw error;
      for (var i = 0; i < sources.length; ++i) {
        if (sources[i].name == "Electron") {
          navigator.webkitGetUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: sources[i].id,
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720
              }
            }
          }, gotStream, getUserMediaError);
          return;
        }
      }
    });

    function gotStream(stream) {
      document.querySelector('video').src = URL.createObjectURL(stream);
    }

    function getUserMediaError(e) {
      console.log('getUserMediaError');
    }

When creating a constraints object for the
`navigator.webkitGetUserMedia` call, if you are using a source from
`desktopCapturer` your `chromeMediaSource` must be set to `"desktop"`
and your `audio` must be set to `false`.

If you wish to capture the audio and video from the entire desktop you
can set `chromeMediaSource` to `"screen"` and `audio` to `true`. When
using this method you cannot specify a `chromeMediaSourceId`.

Methods
-------

The `desktopCapturer` module has the following methods:

### `desktopCapturer.getSources(options, callback)`

-   `options` Object
    -   `types` Array - An array of String that lists the types of
        desktop sources to be captured, available types are `screen` and
        `window`.
    -   `thumbnailSize` Object (optional) - The suggested size that
        thumbnail should be scaled, it is `{width: 150, height: 150}`
        by default.
-   `callback` Function

Starts a request to get all desktop sources, `callback` will be called
with `callback(error, sources)` when the request is completed.

The `sources` is an array of `Source` objects, each `Source` represents
a captured screen or individual window, and has following properties:

-   `id` String - The id of the captured window or screen used in
    `navigator.webkitGetUserMedia`. The format looks like `window:XX` or
    `screen:XX` where `XX` is a random generated number.
-   `name` String - The described name of the capturing screen
    or window. If the source is a screen, the name will be
    `Entire Screen` or `Screen <index>`; if it is a window, the name
    will be the window's title.
-   `thumbnail` [NativeImage](NativeImage.md) - A thumbnail image.

**Note:** There is no guarantee that the size of `source.thumbnail` is
always the same as the `thumnbailSize` in `options`. It also depends on
the scale of the screen or window.

dialog
======

The `dialog` module provides APIs to show native system dialogs, such as
opening files or alerting, so web applications can deliver the same user
experience as native applications.

An example of showing a dialog to select multiple files and directories:

    var win = ...;  // BrowserWindow in which to show the dialog
    const dialog = require('electron').dialog;
    console.log(dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]}));

The Dialog is opened from Electron's main thread. If you want to use the
dialog object from a renderer process, remember to access it using the
remote:

    const dialog = require('electron').remote.dialog;

**Note for OS X**: If you want to present dialogs as sheets, the only
thing you have to do is provide a `BrowserWindow` reference in the
`browserWindow` parameter.

Methods
-------

The `dialog` module has the following methods:

### `dialog.showOpenDialog([browserWindow, ]options[, callback])`

-   `browserWindow` BrowserWindow (optional)
-   `options` Object
    -   `title` String
    -   `defaultPath` String
    -   `filters` Array
    -   `properties` Array - Contains which features the dialog should
        use, can contain `openFile`, `openDirectory`, `multiSelections`
        and `createDirectory`
-   `callback` Function (optional)

On success this method returns an array of file paths chosen by the
user, otherwise it returns `undefined`.

The `filters` specifies an array of file types that can be displayed or
selected when you want to limit the user to a specific type. For
example:

    {
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
        { name: 'Custom File Type', extensions: ['as'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    }

The `extensions` array should contain extensions without wildcards or
dots (e.g. `'png'` is good but `'.png'` and `'*.png'` are bad). To show
all files, use the `'*'` wildcard (no other wildcard is supported).

If a `callback` is passed, the API call will be asynchronous and the
result will be passed via `callback(filenames)`

**Note:** On Windows and Linux an open dialog can not be both a file
selector and a directory selector, so if you set `properties` to
`['openFile', 'openDirectory']` on these platforms, a directory selector
will be shown.

### `dialog.showSaveDialog([browserWindow, ]options[, callback])`

-   `browserWindow` BrowserWindow (optional)
-   `options` Object
    -   `title` String
    -   `defaultPath` String
    -   `filters` Array
-   `callback` Function (optional)

On success this method returns the path of the file chosen by the user,
otherwise it returns `undefined`.

The `filters` specifies an array of file types that can be displayed,
see `dialog.showOpenDialog` for an example.

If a `callback` is passed, the API call will be asynchronous and the
result will be passed via `callback(filename)`

### `dialog.showMessageBox([browserWindow, ]options[, callback])`

-   `browserWindow` BrowserWindow (optional)
-   `options` Object
    -   `type` String - Can be `"none"`, `"info"`, `"error"`,
        `"question"` or `"warning"`. On Windows, "question" displays the
        same icon as "info", unless you set an icon using the
        "icon" option.
    -   `buttons` Array - Array of texts for buttons.
    -   `defaultId` Integer - Index of the button in the buttons array
        which will be selected by default when the message box opens.
    -   `title` String - Title of the message box, some platforms will
        not show it.
    -   `message` String - Content of the message box.
    -   `detail` String - Extra information of the message.
    -   `icon` [NativeImage](native-image.md)
    -   `cancelId` Integer - The value will be returned when user
        cancels the dialog instead of clicking the buttons of
        the dialog. By default it is the index of the buttons that have
        "cancel" or "no" as label, or 0 if there is no such buttons. On
        OS X and Windows the index of "Cancel" button will always be
        used as `cancelId`, not matter whether it is already specified.
    -   `noLink` Boolean - On Windows Electron will try to figure out
        which one of the `buttons` are common buttons (like "Cancel" or
        "Yes"), and show the others as command links in the dialog. This
        can make the dialog appear in the style of modern Windows apps.
        If you don't like this behavior, you can set `noLink` to `true`.
-   `callback` Function

Shows a message box, it will block the process until the message box is
closed. It returns the index of the clicked button.

If a `callback` is passed, the API call will be asynchronous and the
result will be passed via `callback(response)`.

### `dialog.showErrorBox(title, content)`

Displays a modal dialog that shows an error message.

This API can be called safely before the `ready` event the `app` module
emits, it is usually used to report errors in early stage of startup. If
called before the app `ready`event on Linux, the message will be emitted
to stderr, and no GUI dialog will appear.

DownloadItem
============

`DownloadItem` is an EventEmitter represents a download item in
Electron. It is used in `will-download` event of `Session` module, and
allows users to control the download item.

    // In the main process.
    win.webContents.session.on('will-download', function(event, item, webContents) {
      // Set the save path, making Electron not to prompt a save dialog.
      item.setSavePath('/tmp/save.pdf');
      console.log(item.getMimeType());
      console.log(item.getFilename());
      console.log(item.getTotalBytes());
      item.on('updated', function() {
        console.log('Received bytes: ' + item.getReceivedBytes());
      });
      item.on('done', function(e, state) {
        if (state == "completed") {
          console.log("Download successfully");
        } else {
          console.log("Download is cancelled or interrupted that can't be resumed");
        }
      });

Events
------

### Event: 'updated'

Emits when the `downloadItem` gets updated.

### Event: 'done'

-   `event` Event
-   `state` String
    -   `completed` - The download completed successfully.
    -   `cancelled` - The download has been cancelled.
    -   `interrupted` - An error broke the connection with the
        file server.

Emits when the download is in a terminal state. This includes a
completed download, a cancelled download(via `downloadItem.cancel()`),
and interrupted download that can't be resumed.

Methods
-------

The `downloadItem` object has the following methods:

### `downloadItem.setSavePath(path)`

-   `path` String - Set the save file path of the download item.

The API is only available in session's `will-download` callback
function. If user doesn't set the save path via the API, Electron will
use the original routine to determine the save path(Usually prompts a
save dialog).

### `downloadItem.pause()`

Pauses the download.

### `downloadItem.resume()`

Resumes the download that has been paused.

### `downloadItem.cancel()`

Cancels the download operation.

### `downloadItem.getURL()`

Returns a `String` represents the origin url where the item is
downloaded from.

### `downloadItem.getMimeType()`

Returns a `String` represents the mime type.

### `downloadItem.hasUserGesture()`

Returns a `Boolean` indicates whether the download has user gesture.

### `downloadItem.getFilename()`

Returns a `String` represents the file name of the download item.

**Note:** The file name is not always the same as the actual one saved
in local disk. If user changes the file name in a prompted download
saving dialog, the actual name of saved file will be different.

### `downloadItem.getTotalBytes()`

Returns a `Integer` represents the total size in bytes of the download
item. If the size is unknown, it returns 0.

### `downloadItem.getReceivedBytes()`

Returns a `Integer` represents the received bytes of the download item.

### `downloadItem.getContentDisposition()`

Returns a `String` represents the Content-Disposition field from the
response header.

Environment variables
=====================

Some behaviors of Electron are controlled by environment variables,
because they are initialized earlier than command line and the app's
code.

Examples on POSIX shells:

    $ export ELECTRON_ENABLE_LOGGING=true
    $ electron

on Windows console:

    > set ELECTRON_ENABLE_LOGGING=true
    > electron

`ELECTRON_RUN_AS_NODE`
----------------------

Starts the process as a normal Node.js process.

`ELECTRON_ENABLE_LOGGING`
-------------------------

Prints Chrome's internal logging to console.

`ELECTRON_LOG_ASAR_READS`
-------------------------

When Electron reads from an ASAR file, log the read offset and file path
to the system `tmpdir`. The resulting file can be provided to the ASAR
module to optimize file ordering.

`ELECTRON_ENABLE_STACK_DUMPING`
-------------------------------

When Electron crashed, prints the stack trace to console.

This environment variable will not work if `crashReporter` is started.

`ELECTRON_DEFAULT_ERROR_MODE` *Windows*
---------------------------------------

Shows Windows's crash dialog when Electron crashed.

This environment variable will not work if `crashReporter` is started.

`ELECTRON_NO_ATTACH_CONSOLE` *Windows*
--------------------------------------

Don't attach to current console session.

`ELECTRON_FORCE_WINDOW_MENU_BAR` *Linux*
----------------------------------------

Don't use global menu bar on Linux.

`ELECTRON_HIDE_INTERNAL_MODULES`
--------------------------------

Turns off compatibility mode for old built-in modules like
`require('ipc')`.

`File` object
=============

The DOM's File interface provides abstraction around native files in
order to let users work on native files directly with the HTML5 file
API. Electron has added a `path` attribute to the `File` interface which
exposes the file's real path on filesystem.

Example on getting a real path from a dragged-onto-the-app file:

    <div id="holder">
      Drag your file here
    </div>

    <script>
      var holder = document.getElementById('holder');
      holder.ondragover = function () {
        return false;
      };
      holder.ondragleave = holder.ondragend = function () {
        return false;
      };
      holder.ondrop = function (e) {
        e.preventDefault();
        var file = e.dataTransfer.files[0];
        console.log('File you dragged here is', file.path);
        return false;
      };
    </script>

Frameless Window
================

A frameless window is a window that has no
[chrome](https://developer.mozilla.org/en-US/docs/Glossary/Chrome), the
parts of the window, like toolbars, that are not a part of the web page.
These are options on the [`BrowserWindow`](browser-window.md) class.

Create a frameless window
-------------------------

To create a frameless window, you need to set `frame` to `false` in
[BrowserWindow](browser-window.md)'s `options`:

    const BrowserWindow = require('electron').BrowserWindow;
    var win = new BrowserWindow({ width: 800, height: 600, frame: false });

### Alternatives on OS X

On Mac OS X 10.10 Yosemite and newer, there's an alternative way to
specify a chromeless window. Instead of setting `frame` to `false` which
disables both the titlebar and window controls, you may want to have the
title bar hidden and your content extend to the full window size, yet
still preserve the window controls ("traffic lights") for standard
window actions. You can do so by specifying the new `titleBarStyle`
option:

    var win = new BrowserWindow({ 'titleBarStyle': 'hidden' });

Transparent window
------------------

By setting the `transparent` option to `true`, you can also make the
frameless window transparent:

    var win = new BrowserWindow({ transparent: true, frame: false });

### Limitations

-   You can not click through the transparent area. We are going to
    introduce an API to set window shape to solve this, see [our
    issue](https://github.com/electron/electron/issues/1335)
    for details.
-   Transparent windows are not resizable. Setting `resizable` to `true`
    may make a transparent window stop working on some platforms.
-   The `blur` filter only applies to the web page, so there is no way
    to apply blur effect to the content below the window (i.e. other
    applications open on the user's system).
-   On Windows operation systems, transparent windows will not work when
    DWM is disabled.
-   On Linux users have to put
    `--enable-transparent-visuals --disable-gpu` in the command line to
    disable GPU and allow ARGB to make transparent window, this is
    caused by an upstream bug that [alpha channel doesn't work on some
    NVidia
    drivers](https://code.google.com/p/chromium/issues/detail?id=369209)
    on Linux.
-   On Mac the native window shadow will not be shown on a
    transparent window.

Draggable region
----------------

By default, the frameless window is non-draggable. Apps need to specify
`-webkit-app-region: drag` in CSS to tell Electron which regions are
draggable (like the OS's standard titlebar), and apps can also use
`-webkit-app-region: no-drag` to exclude the non-draggable area from the
draggable region. Note that only rectangular shapes are currently
supported.

To make the whole window draggable, you can add
`-webkit-app-region: drag` as `body`'s style:

    <body style="-webkit-app-region: drag">
    </body>

And note that if you have made the whole window draggable, you must also
mark buttons as non-draggable, otherwise it would be impossible for
users to click on them:

    button {
      -webkit-app-region: no-drag;
    }

If you're setting just a custom titlebar as draggable, you also need to
make all buttons in titlebar non-draggable.

Text selection
--------------

In a frameless window the dragging behaviour may conflict with selecting
text. For example, when you drag the titlebar you may accidentally
select the text on the titlebar. To prevent this, you need to disable
text selection within a draggable area like this:

    .titlebar {
      -webkit-user-select: none;
      -webkit-app-region: drag;
    }

Context menu
------------

On some platforms, the draggable area will be treated as a non-client
frame, so when you right click on it a system menu will pop up. To make
the context menu behave correctly on all platforms you should never use
a custom context menu on draggable areas.

globalShortcut
==============

The `globalShortcut` module can register/unregister a global keyboard
shortcut with the operating system so that you can customize the
operations for various shortcuts.

**Note:** The shortcut is global; it will work even if the app does not
have the keyboard focus. You should not use this module until the
`ready` event of the app module is emitted.

    const electron = require('electron');
    const app = electron.app;
    const globalShortcut = electron.globalShortcut;

    app.on('ready', function() {
      // Register a 'CommandOrControl+X' shortcut listener.
      var ret = globalShortcut.register('CommandOrControl+X', function() {
        console.log('CommandOrControl+X is pressed');
      });

      if (!ret) {
        console.log('registration failed');
      }

      // Check whether a shortcut is registered.
      console.log(globalShortcut.isRegistered('CommandOrControl+X'));
    });

    app.on('will-quit', function() {
      // Unregister a shortcut.
      globalShortcut.unregister('CommandOrControl+X');

      // Unregister all shortcuts.
      globalShortcut.unregisterAll();
    });

Methods
-------

The `globalShortcut` module has the following methods:

### `globalShortcut.register(accelerator, callback)`

-   `accelerator` [Accelerator](accelerator.md)
-   `callback` Function

Registers a global shortcut of `accelerator`. The `callback` is called
when the registered shortcut is pressed by the user.

When the accelerator is already taken by other applications, this call
will silently fail. This behavior is intended by operating systems,
since they don't want applications to fight for global shortcuts.

### `globalShortcut.isRegistered(accelerator)`

-   `accelerator` [Accelerator](accelerator.md)

Returns whether this application has registered `accelerator`.

When the accelerator is already taken by other applications, this call
will still return `false`. This behavior is intended by operating
systems, since they don't want applications to fight for global
shortcuts.

### `globalShortcut.unregister(accelerator)`

-   `accelerator` [Accelerator](accelerator.md)

Unregisters the global shortcut of `accelerator`.

### `globalShortcut.unregisterAll()`

Unregisters all of the global shortcuts.

ipcMain
=======

The `ipcMain` module is an instance of the
[EventEmitter](https://nodejs.org/api/events.html) class. When used in
the main process, it handles asynchronous and synchronous messages sent
from a renderer process (web page). Messages sent from a renderer will
be emitted to this module.

Sending Messages
----------------

It is also possible to send messages from the main process to the
renderer process, see
[webContents.send](web-contents.md#webcontentssendchannel-arg1-arg2-)
for more information.

-   When sending a message, the event name is the `channel`.
-   To reply a synchronous message, you need to set `event.returnValue`.
-   To send an asynchronous back to the sender, you can use
    `event.sender.send(...)`.

An example of sending and handling messages between the render and main
processes:

    // In main process.
    const ipcMain = require('electron').ipcMain;
    ipcMain.on('asynchronous-message', function(event, arg) {
      console.log(arg);  // prints "ping"
      event.sender.send('asynchronous-reply', 'pong');
    });

    ipcMain.on('synchronous-message', function(event, arg) {
      console.log(arg);  // prints "ping"
      event.returnValue = 'pong';
    });

    // In renderer process (web page).
    const ipcRenderer = require('electron').ipcRenderer;
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

    ipcRenderer.on('asynchronous-reply', function(event, arg) {
      console.log(arg); // prints "pong"
    });
    ipcRenderer.send('asynchronous-message', 'ping');

Listening for Messages
----------------------

The `ipcMain` module has the following method to listen for events:

### `ipcMain.on(channel, listener)`

-   `channel` String
-   `listener` Function

Listens to `channel`, when a new message arrives `listener` would be
called with `listener(event, args...)`.

### `ipcMain.once(channel, listener)`

-   `channel` String
-   `listener` Function

Adds a one time `listener` function for the event. This `listener` is
invoked only the next time a message is sent to `channel`, after which
it is removed.

### `ipcMain.removeListener(channel, listener)`

-   `channel` String
-   `listener` Function

Removes the specified `listener` from the listener array for the
specified `channel`.

### `ipcMain.removeAllListeners([channel])`

-   `channel` String (optional)

Removes all listeners, or those of the specified `channel`.

Event object
------------

The `event` object passed to the `callback` has the following methods:

### `event.returnValue`

Set this to the value to be returned in a synchronous message.

### `event.sender`

Returns the `webContents` that sent the message, you can call
`event.sender.send` to reply to the asynchronous message, see
[webContents.send](web-contents.md#webcontentssendchannel-arg1-arg2-)
for more information.

ipcRenderer
===========

The `ipcRenderer` module is an instance of the
[EventEmitter](https://nodejs.org/api/events.html) class. It provides a
few methods so you can send synchronous and asynchronous messages from
the render process (web page) to the main process. You can also receive
replies from the main process.

See [ipcMain](ipc-main.md) for code examples.

Listening for Messages
----------------------

The `ipcRenderer` module has the following method to listen for events:

### `ipcRenderer.on(channel, listener)`

-   `channel` String
-   `listener` Function

Listens to `channel`, when a new message arrives `listener` would be
called with `listener(event, args...)`.

### `ipcRenderer.once(channel, listener)`

-   `channel` String
-   `listener` Function

Adds a one time `listener` function for the event. This `listener` is
invoked only the next time a message is sent to `channel`, after which
it is removed.

### `ipcRenderer.removeListener(channel, listener)`

-   `channel` String
-   `listener` Function

Removes the specified `listener` from the listener array for the
specified `channel`.

### `ipcRenderer.removeAllListeners([channel])`

-   `channel` String (optional)

Removes all listeners, or those of the specified `channel`.

Sending Messages
----------------

The `ipcRenderer` module has the following methods for sending messages:

### `ipcRenderer.send(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Send a message to the main process asynchronously via `channel`, you can
also send arbitrary arguments. Arguments will be serialized in JSON
internally and hence no functions or prototype chain will be included.

The main process handles it by listening for `channel` with `ipcMain`
module.

### `ipcRenderer.sendSync(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Send a message to the main process synchronously via `channel`, you can
also send arbitrary arguments. Arguments will be serialized in JSON
internally and hence no functions or prototype chain will be included.

The main process handles it by listening for `channel` with `ipcMain`
module, and replies by setting `event.returnValue`.

**Note:** Sending a synchronous message will block the whole renderer
process, unless you know what you are doing you should never use it.

### `ipcRenderer.sendToHost(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Like `ipcRenderer.send` but the event will be sent to the `<webview>`
element in the host page instead of the main process.

MenuItem
========

The `menu-item` module allows you to add items to an application or
context [`menu`](menu.md).

See [`menu`](menu.md) for examples.

Class: MenuItem
---------------

Create a new `MenuItem` with the following method:

### new MenuItem(options)

-   `options` Object
    -   `click` Function - Will be called with
        `click(menuItem, browserWindow)` when the menu item is clicked
    -   `role` String - Define the action of the menu item; when
        specified the `click` property will be ignored
    -   `type` String - Can be `normal`, `separator`, `submenu`,
        `checkbox` or `radio`
    -   `label` String
    -   `sublabel` String
    -   `accelerator` [Accelerator](accelerator.md)
    -   `icon` [NativeImage](native-image.md)
    -   `enabled` Boolean - If false, the menu item will be greyed out
        and unclickable.
    -   `visible` Boolean - If false, the menu item will be
        entirely hidden.
    -   `checked` Boolean - Should only be specified for `checkbox` or
        `radio` type menu items.
    -   `submenu` Menu - Should be specified for `submenu` type
        menu items. If `submenu` is specified, the `type: 'submenu'` can
        be omitted. If the value is not a `Menu` then it will be
        automatically converted to one using `Menu.buildFromTemplate`.
    -   `id` String - Unique within a single menu. If defined then it
        can be used as a reference to this item by the
        position attribute.
    -   `position` String - This field allows fine-grained definition of
        the specific location within a given menu.

It is best to specify `role` for any menu item that matches a standard
role, rather than trying to manually implement the behavior in a `click`
function. The built-in `role` behavior will give the best native
experience.

The `role` property can have following values:

-   `undo`
-   `redo`
-   `cut`
-   `copy`
-   `paste`
-   `selectall`
-   `minimize` - Minimize current window
-   `close` - Close current window

On OS X `role` can also have following additional values:

-   `about` - Map to the `orderFrontStandardAboutPanel` action
-   `hide` - Map to the `hide` action
-   `hideothers` - Map to the `hideOtherApplications` action
-   `unhide` - Map to the `unhideAllApplications` action
-   `front` - Map to the `arrangeInFront` action
-   `window` - The submenu is a "Window" menu
-   `help` - The submenu is a "Help" menu
-   `services` - The submenu is a "Services" menu

Instance Properties
-------------------

The following properties (and no others) can be updated on an existing
`MenuItem`:

-   `enabled` Boolean
-   `visible` Boolean
-   `checked` Boolean

Their meanings are as described above.

A `checkbox` menu item will toggle its `checked` property on and off
when selected. You can add a `click` function to do additional work.

A `radio` menu item will turn on its `checked` property when clicked,
and will turn off that property for all adjacent items in the same menu.
Again, you can add a `click` function for additional behavior.

Menu
====

The `menu` class is used to create native menus that can be used as
application menus and [context
menus](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/PopupGuide/ContextMenus).
This module is a main process module which can be used in a render
process via the `remote` module.

Each menu consists of multiple [menu items](menu-item.md) and each menu
item can have a submenu.

Below is an example of creating a menu dynamically in a web page (render
process) by using the [remote](remote.md) module, and showing it when
the user right clicks the page:

    <!-- index.html -->
    <script>
    const remote = require('electron').remote;
    const Menu = remote.Menu;
    const MenuItem = remote.MenuItem;

    var menu = new Menu();
    menu.append(new MenuItem({ label: 'MenuItem1', click: function() { console.log('item 1 clicked'); } }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));

    window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      menu.popup(remote.getCurrentWindow());
    }, false);
    </script>

An example of creating the application menu in the render process with
the simple template API:

    var template = [
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'CmdOrCtrl+Z',
            role: 'undo'
          },
          {
            label: 'Redo',
            accelerator: 'Shift+CmdOrCtrl+Z',
            role: 'redo'
          },
          {
            type: 'separator'
          },
          {
            label: 'Cut',
            accelerator: 'CmdOrCtrl+X',
            role: 'cut'
          },
          {
            label: 'Copy',
            accelerator: 'CmdOrCtrl+C',
            role: 'copy'
          },
          {
            label: 'Paste',
            accelerator: 'CmdOrCtrl+V',
            role: 'paste'
          },
          {
            label: 'Select All',
            accelerator: 'CmdOrCtrl+A',
            role: 'selectall'
          },
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: function(item, focusedWindow) {
              if (focusedWindow)
                focusedWindow.reload();
            }
          },
          {
            label: 'Toggle Full Screen',
            accelerator: (function() {
              if (process.platform == 'darwin')
                return 'Ctrl+Command+F';
              else
                return 'F11';
            })(),
            click: function(item, focusedWindow) {
              if (focusedWindow)
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
            }
          },
          {
            label: 'Toggle Developer Tools',
            accelerator: (function() {
              if (process.platform == 'darwin')
                return 'Alt+Command+I';
              else
                return 'Ctrl+Shift+I';
            })(),
            click: function(item, focusedWindow) {
              if (focusedWindow)
                focusedWindow.toggleDevTools();
            }
          },
        ]
      },
      {
        label: 'Window',
        role: 'window',
        submenu: [
          {
            label: 'Minimize',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
          },
          {
            label: 'Close',
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
          },
        ]
      },
      {
        label: 'Help',
        role: 'help',
        submenu: [
          {
            label: 'Learn More',
            click: function() { require('electron').shell.openExternal('http://electron.atom.io') }
          },
        ]
      },
    ];

    if (process.platform == 'darwin') {
      var name = require('electron').remote.app.getName();
      template.unshift({
        label: name,
        submenu: [
          {
            label: 'About ' + name,
            role: 'about'
          },
          {
            type: 'separator'
          },
          {
            label: 'Services',
            role: 'services',
            submenu: []
          },
          {
            type: 'separator'
          },
          {
            label: 'Hide ' + name,
            accelerator: 'Command+H',
            role: 'hide'
          },
          {
            label: 'Hide Others',
            accelerator: 'Command+Alt+H',
            role: 'hideothers'
          },
          {
            label: 'Show All',
            role: 'unhide'
          },
          {
            type: 'separator'
          },
          {
            label: 'Quit',
            accelerator: 'Command+Q',
            click: function() { app.quit(); }
          },
        ]
      });
      // Window menu.
      template[3].submenu.push(
        {
          type: 'separator'
        },
        {
          label: 'Bring All to Front',
          role: 'front'
        }
      );
    }

    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

Class: Menu
-----------

### `new Menu()`

Creates a new menu.

Methods
-------

The `menu` class has the following methods:

### `Menu.setApplicationMenu(menu)`

-   `menu` Menu

Sets `menu` as the application menu on OS X. On Windows and Linux, the
`menu` will be set as each window's top menu.

### `Menu.sendActionToFirstResponder(action)` *OS X*

-   `action` String

Sends the `action` to the first responder of application. This is used
for emulating default Cocoa menu behaviors, usually you would just use
the `role` property of `MenuItem`.

See the [OS X Cocoa Event Handling
Guide](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/EventOverview/EventArchitecture/EventArchitecture.html#//apple_ref/doc/uid/10000060i-CH3-SW7)
for more information on OS X's native actions.

### `Menu.buildFromTemplate(template)`

-   `template` Array

Generally, the `template` is just an array of `options` for constructing
a [MenuItem](menu-item.md). The usage can be referenced above.

You can also attach other fields to the element of the `template` and
they will become properties of the constructed menu items.

Instance Methods
----------------

The `menu` object has the following instance methods:

### `menu.popup([browserWindow, x, y, positioningItem])`

-   `browserWindow` BrowserWindow (optional) - Default is `null`.
-   `x` Number (optional) - Default is -1.
-   `y` Number (**required** if `x` is used) - Default is -1.
-   `positioningItem` Number (optional) *OS X* - The index of the menu
    item to be positioned under the mouse cursor at the
    specified coordinates. Default is -1.

Pops up this menu as a context menu in the `browserWindow`. You can
optionally provide a `x, y` coordinate to place the menu at, otherwise
it will be placed at the current mouse cursor position.

### `menu.append(menuItem)`

-   `menuItem` MenuItem

Appends the `menuItem` to the menu.

### `menu.insert(pos, menuItem)`

-   `pos` Integer
-   `menuItem` MenuItem

Inserts the `menuItem` to the `pos` position of the menu.

Instance Properties
-------------------

`menu` objects also have the following properties:

### `menu.items`

Get an array containing the menu's items.

Notes on OS X Application Menu
------------------------------

OS X has a completely different style of application menu from Windows
and Linux, here are some notes on making your app's menu more
native-like.

### Standard Menus

On OS X there are many system defined standard menus, like the
`Services` and `Windows` menus. To make your menu a standard menu, you
should set your menu's `role` to one of following and Electron will
recognize them and make them become standard menus:

-   `window`
-   `help`
-   `services`

### Standard Menu Item Actions

OS X has provided standard actions for some menu items, like
`About xxx`, `Hide xxx`, and `Hide Others`. To set the action of a menu
item to a standard action, you should set the `role` attribute of the
menu item.

### Main Menu's Name

On OS X the label of application menu's first item is always your app's
name, no matter what label you set. To change it you have to change your
app's name by modifying your app bundle's `Info.plist` file. See [About
Information Property List
Files](https://developer.apple.com/library/ios/documentation/general/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html)
for more information.

Setting Menu for Specific Browser Window (*Linux* *Windows*)
------------------------------------------------------------

The [`setMenu`
method](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetmenumenu-linux-windows)
of browser windows can set the menu of certain browser window.

Menu Item Position
------------------

You can make use of `position` and `id` to control how the item will be
placed when building a menu with `Menu.buildFromTemplate`.

The `position` attribute of `MenuItem` has the form `[placement]=[id]`,
where `placement` is one of `before`, `after`, or `endof` and `id` is
the unique ID of an existing item in the menu:

-   `before` - Inserts this item before the id referenced item. If the
    referenced item doesn't exist the item will be inserted at the end
    of the menu.
-   `after` - Inserts this item after id referenced item. If the
    referenced item doesn't exist the item will be inserted at the end
    of the menu.
-   `endof` - Inserts this item at the end of the logical group
    containing the id referenced item (groups are created by
    separator items). If the referenced item doesn't exist, a new
    separator group is created with the given id and this item is
    inserted after that separator.

When an item is positioned, all un-positioned items are inserted after
it until a new item is positioned. So if you want to position a group of
menu items in the same location you only need to specify a position for
the first item.

### Examples

Template:

    [
      {label: '4', id: '4'},
      {label: '5', id: '5'},
      {label: '1', id: '1', position: 'before=4'},
      {label: '2', id: '2'},
      {label: '3', id: '3'}
    ]

Menu:

    - 1
    - 2
    - 3
    - 4
    - 5

Template:

    [
      {label: 'a', position: 'endof=letters'},
      {label: '1', position: 'endof=numbers'},
      {label: 'b', position: 'endof=letters'},
      {label: '2', position: 'endof=numbers'},
      {label: 'c', position: 'endof=letters'},
      {label: '3', position: 'endof=numbers'}
    ]

Menu:

    - ---
    - a
    - b
    - c
    - ---
    - 1
    - 2
    - 3

nativeImage
===========

In Electron, for the APIs that take images, you can pass either file
paths or `nativeImage` instances. An empty image will be used when
`null` is passed.

For example, when creating a tray or setting a window's icon, you can
pass an image file path as a `String`:

    var appIcon = new Tray('/Users/somebody/images/icon.png');
    var window = new BrowserWindow({icon: '/Users/somebody/images/window.png'});

Or read the image from the clipboard which returns a `nativeImage`:

    var image = clipboard.readImage();
    var appIcon = new Tray(image);

Supported Formats
-----------------

Currently `PNG` and `JPEG` image formats are supported. `PNG` is
recommended because of its support for transparency and lossless
compression.

On Windows, you can also load an `ICO` icon from a file path.

High Resolution Image
---------------------

On platforms that have high-DPI support, you can append `@2x` after
image's base filename to mark it as a high resolution image.

For example if `icon.png` is a normal image that has standard
resolution, then `icon@2x.png` will be treated as a high resolution
image that has double DPI density.

If you want to support displays with different DPI densities at the same
time, you can put images with different sizes in the same folder and use
the filename without DPI suffixes. For example:

    images/
    ├── icon.png
    ├── icon@2x.png
    └── icon@3x.png

    var appIcon = new Tray('/Users/somebody/images/icon.png');

Following suffixes for DPI are also supported:

-   `@1x`
-   `@1.25x`
-   `@1.33x`
-   `@1.4x`
-   `@1.5x`
-   `@1.8x`
-   `@2x`
-   `@2.5x`
-   `@3x`
-   `@4x`
-   `@5x`

Template Image
--------------

Template images consist of black and clear colors (and an alpha
channel). Template images are not intended to be used as standalone
images and are usually mixed with other content to create the desired
final appearance.

The most common case is to use template images for a menu bar icon so it
can adapt to both light and dark menu bars.

**Note:** Template image is only supported on OS X.

To mark an image as a template image, its filename should end with the
word `Template`. For example:

-   `xxxTemplate.png`
-   `xxxTemplate@2x.png`

Methods
-------

The `nativeImage` class has the following methods:

### `nativeImage.createEmpty()`

Creates an empty `nativeImage` instance.

### `nativeImage.createFromPath(path)`

-   `path` String

Creates a new `nativeImage` instance from a file located at `path`.

### `nativeImage.createFromBuffer(buffer[, scaleFactor])`

-   `buffer`
    [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer)
-   `scaleFactor` Double (optional)

Creates a new `nativeImage` instance from `buffer`. The default
`scaleFactor` is 1.0.

### `nativeImage.createFromDataURL(dataURL)`

-   `dataURL` String

Creates a new `nativeImage` instance from `dataURL`.

Instance Methods
----------------

The following methods are available on instances of `nativeImage`:

    const nativeImage = require('electron').nativeImage;

    var image = nativeImage.createFromPath('/Users/somebody/images/icon.png');

### `image.toPng()`

Returns a
[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that
contains the image's `PNG` encoded data.

### `image.toJpeg(quality)`

-   `quality` Integer (**required**) - Between 0 - 100.

Returns a
[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that
contains the image's `JPEG` encoded data.

### `image.toDataURL()`

Returns the data URL of the image.

### `image.getNativeHandle()` *OS X*

Returns a
[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that
stores C pointer to underlying native handle of the image. On OS X, a
pointer to `NSImage` instance would be returned.

Notice that the returned pointer is a weak pointer to the underlying
native image instead of a copy, so you *must* ensure that the associated
`nativeImage` instance is kept around.

### `image.isEmpty()`

Returns a boolean whether the image is empty.

### `image.getSize()`

Returns the size of the image.

### `image.setTemplateImage(option)`

-   `option` Boolean

Marks the image as template image.

### `image.isTemplateImage()`

Returns a boolean whether the image is a template image.

powerMonitor
============

The `power-monitor` module is used to monitor power state changes. You
can only use it in the main process. You should not use this module
until the `ready` event of the `app` module is emitted.

For example:

    app.on('ready', function() {
      require('electron').powerMonitor.on('suspend', function() {
        console.log('The system is going to sleep');
      });
    });

Events
------

The `power-monitor` module emits the following events:

### Event: 'suspend'

Emitted when the system is suspending.

### Event: 'resume'

Emitted when system is resuming.

### Event: 'on-ac' *Windows*

Emitted when the system changes to AC power.

### Event: 'on-battery' *Windows*

Emitted when system changes to battery power.

powerSaveBlocker
================

The `powerSaveBlocker` module is used to block the system from entering
low-power (sleep) mode and thus allowing the app to keep the system and
screen active.

For example:

    const powerSaveBlocker = require('electron').powerSaveBlocker;

    var id = powerSaveBlocker.start('prevent-display-sleep');
    console.log(powerSaveBlocker.isStarted(id));

    powerSaveBlocker.stop(id);

Methods
-------

The `powerSaveBlocker` module has the following methods:

### `powerSaveBlocker.start(type)`

-   `type` String - Power save blocker type.
    -   `prevent-app-suspension` - Prevent the application from
        being suspended. Keeps system active but allows screen to be
        turned off. Example use cases: downloading a file or
        playing audio.
    -   `prevent-display-sleep`- Prevent the display from going
        to sleep. Keeps system and screen active. Example use case:
        playing video.

Starts preventing the system from entering lower-power mode. Returns an
integer identifying the power save blocker.

**Note:** `prevent-display-sleep` has higher has precedence over
`prevent-app-suspension`. Only the highest precedence type takes effect.
In other words, `prevent-display-sleep` always takes precedence over
`prevent-app-suspension`.

For example, an API calling A requests for `prevent-app-suspension`, and
another calling B requests for `prevent-display-sleep`.
`prevent-display-sleep` will be used until B stops its request. After
that, `prevent-app-suspension` is used.

### `powerSaveBlocker.stop(id)`

-   `id` Integer - The power save blocker id returned by
    `powerSaveBlocker.start`.

Stops the specified power save blocker.

### `powerSaveBlocker.isStarted(id)`

-   `id` Integer - The power save blocker id returned by
    `powerSaveBlocker.start`.

Returns a boolean whether the corresponding `powerSaveBlocker` has
started.

process
=======

The `process` object in Electron has the following differences from the
one in upstream node:

-   `process.type` String - Process's type, can be `browser` (i.e.
    main process) or `renderer`.
-   `process.versions['electron']` String - Version of Electron.
-   `process.versions['chrome']` String - Version of Chromium.
-   `process.resourcesPath` String - Path to JavaScript source code.
-   `process.mas` Boolean - For Mac App Store build, this value is
    `true`, for other builds it is `undefined`.

Events
------

### Event: 'loaded'

Emitted when Electron has loaded its internal initialization script and
is beginning to load the web page or the main script.

It can be used by the preload script to add removed Node global symbols
back to the global scope when node integration is turned off:

    // preload.js
    var _setImmediate = setImmediate;
    var _clearImmediate = clearImmediate;
    process.once('loaded', function() {
      global.setImmediate = _setImmediate;
      global.clearImmediate = _clearImmediate;
    });

Properties
----------

### `process.noAsar`

Setting this to `true` can disable the support for `asar` archives in
Node's built-in modules.

Methods
-------

The `process` object has the following method:

### `process.hang()`

Causes the main thread of the current process hang.

### `process.setFdLimit(maxDescriptors)` *OS X* *Linux*

-   `maxDescriptors` Integer

Sets the file descriptor soft limit to `maxDescriptors` or the OS hard
limit, whichever is lower for the current process.

protocol
========

The `protocol` module can register a custom protocol or intercept an
existing protocol.

An example of implementing a protocol that has the same effect as the
`file://` protocol:

    const electron = require('electron');
    const app = electron.app;
    const path = require('path');

    app.on('ready', function() {
        var protocol = electron.protocol;
        protocol.registerFileProtocol('atom', function(request, callback) {
          var url = request.url.substr(7);
          callback({path: path.normalize(__dirname + '/' + url)});
        }, function (error) {
          if (error)
            console.error('Failed to register protocol')
        });
    });

**Note:** This module can only be used after the `ready` event in the
`app` module is emitted.

Methods
-------

The `protocol` module has the following methods:

### `protocol.registerStandardSchemes(schemes)`

-   `schemes` Array - Custom schemes to be registered as
    standard schemes.

A standard `scheme` adheres to what RFC 3986 calls [generic URI
syntax](https://tools.ietf.org/html/rfc3986#section-3). This includes
`file:` and `filesystem:`.

### `protocol.registerServiceWorkerSchemes(schemes)`

-   `schemes` Array - Custom schemes to be registered to handle
    service workers.

### `protocol.registerFileProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Registers a protocol of `scheme` that will send the file as a response.
The `handler` will be called with `handler(request, callback)` when a
`request` is going to be created with `scheme`. `completion` will be
called with `completion(null)` when `scheme` is successfully registered
or `completion(error)` when failed.

-   `request` Object
    -   `url` String
    -   `referrer` String
    -   `method` String
    -   `uploadData` Array (optional)
-   `callback` Function

The `uploadData` is an array of `data` objects:

-   `data` Object
    -   `bytes` Buffer - Content being sent.
    -   `file` String - Path of file being uploaded.

To handle the `request`, the `callback` should be called with either the
file's path or an object that has a `path` property, e.g.
`callback(filePath)` or `callback({path: filePath})`.

When `callback` is called with nothing, a number, or an object that has
an `error` property, the `request` will fail with the `error` number you
specified. For the available error numbers you can use, please see the
[net error
list](https://code.google.com/p/chromium/codesearch#chromium/src/net/base/net_error_list.h).

By default the `scheme` is treated like `http:`, which is parsed
differently than protocols that follow the "generic URI syntax" like
`file:`, so you probably want to call `protocol.registerStandardSchemes`
to have your scheme treated as a standard scheme.

### `protocol.registerBufferProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Registers a protocol of `scheme` that will send a `Buffer` as a
response.

The usage is the same with `registerFileProtocol`, except that the
`callback` should be called with either a `Buffer` object or an object
that has the `data`, `mimeType`, and `charset` properties.

Example:

    protocol.registerBufferProtocol('atom', function(request, callback) {
      callback({mimeType: 'text/html', data: new Buffer('<h5>Response</h5>')});
    }, function (error) {
      if (error)
        console.error('Failed to register protocol')
    });

### `protocol.registerStringProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Registers a protocol of `scheme` that will send a `String` as a
response.

The usage is the same with `registerFileProtocol`, except that the
`callback` should be called with either a `String` or an object that has
the `data`, `mimeType`, and `charset` properties.

### `protocol.registerHttpProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Registers a protocol of `scheme` that will send an HTTP request as a
response.

The usage is the same with `registerFileProtocol`, except that the
`callback` should be called with a `redirectRequest` object that has the
`url`, `method`, `referrer`, `uploadData` and `session` properties.

-   `redirectRequest` Object
    -   `url` String
    -   `method` String
    -   `session` Object (optional)
    -   `uploadData` Object (optional)

By default the HTTP request will reuse the current session. If you want
the request to have a different session you should set `session` to
`null`.

For POST requests the `uploadData` object must be provided.

-   `uploadData` object
    -   `contentType` String - MIME type of the content.
    -   `data` String - Content to be sent.

### `protocol.unregisterProtocol(scheme[, completion])`

-   `scheme` String
-   `completion` Function (optional)

Unregisters the custom protocol of `scheme`.

### `protocol.isProtocolHandled(scheme, callback)`

-   `scheme` String
-   `callback` Function

The `callback` will be called with a boolean that indicates whether
there is already a handler for `scheme`.

### `protocol.interceptFileProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Intercepts `scheme` protocol and uses `handler` as the protocol's new
handler which sends a file as a response.

### `protocol.interceptStringProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Intercepts `scheme` protocol and uses `handler` as the protocol's new
handler which sends a `String` as a response.

### `protocol.interceptBufferProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Intercepts `scheme` protocol and uses `handler` as the protocol's new
handler which sends a `Buffer` as a response.

### `protocol.interceptHttpProtocol(scheme, handler[, completion])`

-   `scheme` String
-   `handler` Function
-   `completion` Function (optional)

Intercepts `scheme` protocol and uses `handler` as the protocol's new
handler which sends a new HTTP request as a response.

### `protocol.uninterceptProtocol(scheme[, completion])`

-   `scheme` String
-   `completion` Function

Remove the interceptor installed for `scheme` and restore its original
handler.

remote
======

The `remote` module provides a simple way to do inter-process
communication (IPC) between the renderer process (web page) and the main
process.

In Electron, GUI-related modules (such as `dialog`, `menu` etc.) are
only available in the main process, not in the renderer process. In
order to use them from the renderer process, the `ipc` module is
necessary to send inter-process messages to the main process. With the
`remote` module, you can invoke methods of the main process object
without explicitly sending inter-process messages, similar to Java's
[RMI](http://en.wikipedia.org/wiki/Java_remote_method_invocation). An
example of creating a browser window from a renderer process:

    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL('https://github.com');

**Note:** for the reverse (access the renderer process from the main
process), you can use
[webContents.executeJavascript](web-contents.md#webcontentsexecutejavascriptcode-usergesture).

Remote Objects
--------------

Each object (including functions) returned by the `remote` module
represents an object in the main process (we call it a remote object or
remote function). When you invoke methods of a remote object, call a
remote function, or create a new object with the remote constructor
(function), you are actually sending synchronous inter-process messages.

In the example above, both `BrowserWindow` and `win` were remote objects
and `new BrowserWindow` didn't create a `BrowserWindow` object in the
renderer process. Instead, it created a `BrowserWindow` object in the
main process and returned the corresponding remote object in the
renderer process, namely the `win` object.

Please note that only [enumerable
properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
are accessible via remote.

Lifetime of Remote Objects
--------------------------

Electron makes sure that as long as the remote object in the renderer
process lives (in other words, has not been garbage collected), the
corresponding object in the main process will not be released. When the
remote object has been garbage collected, the corresponding object in
the main process will be dereferenced.

If the remote object is leaked in the renderer process (e.g. stored in a
map but never freed), the corresponding object in the main process will
also be leaked, so you should be very careful not to leak remote
objects.

Primary value types like strings and numbers, however, are sent by copy.

Passing callbacks to the main process
-------------------------------------

Code in the main process can accept callbacks from the renderer - for
instance the `remote` module - but you should be extremely careful when
using this feature.

First, in order to avoid deadlocks, the callbacks passed to the main
process are called asynchronously. You should not expect the main
process to get the return value of the passed callbacks.

For instance you can't use a function from the renderer process in an
`Array.map` called in the main process:

    // main process mapNumbers.js
    exports.withRendererCallback = function(mapper) {
      return [1,2,3].map(mapper);
    }

    exports.withLocalCallback = function() {
      return exports.mapNumbers(function(x) {
        return x + 1;
      });
    }

    // renderer process
    var mapNumbers = require("remote").require("./mapNumbers");

    var withRendererCb = mapNumbers.withRendererCallback(function(x) {
      return x + 1;
    })

    var withLocalCb = mapNumbers.withLocalCallback()

    console.log(withRendererCb, withLocalCb) // [true, true, true], [2, 3, 4]

As you can see, the renderer callback's synchronous return value was not
as expected, and didn't match the return value of an identical callback
that lives in the main process.

Second, the callbacks passed to the main process will persist until the
main process garbage-collects them.

For example, the following code seems innocent at first glance. It
installs a callback for the `close` event on a remote object:

    remote.getCurrentWindow().on('close', function() {
      // blabla...
    });

But remember the callback is referenced by the main process until you
explicitly uninstall it. If you do not, each time you reload your window
the callback will be installed again, leaking one callback for each
restart.

To make things worse, since the context of previously installed
callbacks has been released, exceptions will be raised in the main
process when the `close` event is emitted.

To avoid this problem, ensure you clean up any references to renderer
callbacks passed to the main process. This involves cleaning up event
handlers, or ensuring the main process is explicitly told to deference
callbacks that came from a renderer process that is exiting.

Accessing built-in modules in the main process
----------------------------------------------

The built-in modules in the main process are added as getters in the
`remote` module, so you can use them directly like the `electron`
module.

    const app = remote.app;

Methods
-------

The `remote` module has the following methods:

### `remote.require(module)`

-   `module` String

Returns the object returned by `require(module)` in the main process.

### `remote.getCurrentWindow()`

Returns the [`BrowserWindow`](browser-window.md) object to which this
web page belongs.

### `remote.getCurrentWebContents()`

Returns the [`WebContents`](web-contents.md) object of this web page.

### `remote.getGlobal(name)`

-   `name` String

Returns the global variable of `name` (e.g. `global[name]`) in the main
process.

### `remote.process`

Returns the `process` object in the main process. This is the same as
`remote.getGlobal('process')` but is cached.

screen
======

The `screen` module retrieves information about screen size, displays,
cursor position, etc. You should not use this module until the `ready`
event of the `app` module is emitted.

`screen` is an
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

**Note:** In the renderer / DevTools, `window.screen` is a reserved DOM
property, so writing `var screen = require('electron').screen` will not
work. In our examples below, we use `electronScreen` as the variable
name instead. An example of creating a window that fills the whole
screen:

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    var mainWindow;

    app.on('ready', function() {
      var electronScreen = electron.screen;
      var size = electronScreen.getPrimaryDisplay().workAreaSize;
      mainWindow = new BrowserWindow({ width: size.width, height: size.height });
    });

Another example of creating a window in the external display:

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    var mainWindow;

    app.on('ready', function() {
      var electronScreen = electron.screen;
      var displays = electronScreen.getAllDisplays();
      var externalDisplay = null;
      for (var i in displays) {
        if (displays[i].bounds.x != 0 || displays[i].bounds.y != 0) {
          externalDisplay = displays[i];
          break;
        }
      }

      if (externalDisplay) {
        mainWindow = new BrowserWindow({
          x: externalDisplay.bounds.x + 50,
          y: externalDisplay.bounds.y + 50
        });
      }
    });

The `Display` object
--------------------

The `Display` object represents a physical display connected to the
system. A fake `Display` may exist on a headless system, or a `Display`
may correspond to a remote, virtual display.

-   `display` object
    -   `id` Integer - Unique identifier associated with the display.
    -   `rotation` Integer - Can be 0, 1, 2, 3, each represents screen
        rotation in clock-wise degrees of 0, 90, 180, 270.
    -   `scaleFactor` Number - Output device's pixel scale factor.
    -   `touchSupport` String - Can be `available`, `unavailable`,
        `unknown`.
    -   `bounds` Object
    -   `size` Object
    -   `workArea` Object
    -   `workAreaSize` Object

Events
------

The `screen` module emits the following events:

### Event: 'display-added'

Returns:

-   `event` Event
-   `newDisplay` Object

Emitted when `newDisplay` has been added.

### Event: 'display-removed'

Returns:

-   `event` Event
-   `oldDisplay` Object

Emitted when `oldDisplay` has been removed.

### Event: 'display-metrics-changed'

Returns:

-   `event` Event
-   `display` Object
-   `changedMetrics` Array

Emitted when one or more metrics change in a `display`. The
`changedMetrics` is an array of strings that describe the changes.
Possible changes are `bounds`, `workArea`, `scaleFactor` and `rotation`.

Methods
-------

The `screen` module has the following methods:

### `screen.getCursorScreenPoint()`

Returns the current absolute position of the mouse pointer.

### `screen.getPrimaryDisplay()`

Returns the primary display.

### `screen.getAllDisplays()`

Returns an array of displays that are currently available.

### `screen.getDisplayNearestPoint(point)`

-   `point` Object
    -   `x` Integer
    -   `y` Integer

Returns the display nearest the specified point.

### `screen.getDisplayMatching(rect)`

-   `rect` Object
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer

Returns the display that most closely intersects the provided bounds.

session
=======

The `session` module can be used to create new `Session` objects.

You can also access the `session` of existing pages by using the
`session` property of [`webContents`](web-contents.md) which is a
property of [`BrowserWindow`](browser-window.md).

    const BrowserWindow = require('electron').BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL("http://github.com");

    var ses = win.webContents.session;

Methods
-------

The `session` module has the following methods:

### session.fromPartition(partition)

-   `partition` String

Returns a new `Session` instance from `partition` string.

If `partition` starts with `persist:`, the page will use a persistent
session available to all pages in the app with the same `partition`. if
there is no `persist:` prefix, the page will use an in-memory session.
If the `partition` is empty then default session of the app will be
returned.

Properties
----------

The `session` module has the following properties:

### session.defaultSession

Returns the default session object of the app.

Class: Session
--------------

You can create a `Session` object in the `session` module:

    const session = require('electron').session;

    var ses = session.fromPartition('persist:name');

### Instance Events

The following events are available on instances of `Session`:

#### Event: 'will-download'

-   `event` Event
-   `item` [DownloadItem](download-item.md)
-   `webContents` [WebContents](web-contents.md)

Emitted when Electron is about to download `item` in `webContents`.

Calling `event.preventDefault()` will cancel the download and `item`
will not be available from next tick of the process.

    session.defaultSession.on('will-download', function(event, item, webContents) {
      event.preventDefault();
      require('request')(item.getURL(), function(data) {
        require('fs').writeFileSync('/somewhere', data);
      });
    });

### Instance Methods

The following methods are available on instances of `Session`:

#### `ses.cookies`

The `cookies` gives you ability to query and modify cookies. For
example:

    // Query all cookies.
    session.defaultSession.cookies.get({}, function(error, cookies) {
      console.log(cookies);
    });

    // Query all cookies associated with a specific url.
    session.defaultSession.cookies.get({ url : "http://www.github.com" }, function(error, cookies) {
      console.log(cookies);
    });

    // Set a cookie with the given cookie data;
    // may overwrite equivalent cookies if they exist.
    var cookie = { url : "http://www.github.com", name : "dummy_name", value : "dummy" };
    session.defaultSession.cookies.set(cookie, function(error) {
      if (error)
        console.error(error);
    });

#### `ses.cookies.get(filter, callback)`

-   `filter` Object
    -   `url` String (optional) - Retrieves cookies which are associated
        with `url`. Empty implies retrieving cookies of all urls.
    -   `name` String (optional) - Filters cookies by name.
    -   `domain` String (optional) - Retrieves cookies whose domains
        match or are subdomains of `domains`
    -   `path` String (optional) - Retrieves cookies whose path matches
        `path`.
    -   `secure` Boolean (optional) - Filters cookies by their
        Secure property.
    -   `session` Boolean (optional) - Filters out session or
        persistent cookies.
-   `callback` Function

Sends a request to get all cookies matching `details`, `callback` will
be called with `callback(error, cookies)` on complete.

`cookies` is an Array of `cookie` objects.

-   `cookie` Object
    -   `name` String - The name of the cookie.
    -   `value` String - The value of the cookie.
    -   `domain` String - The domain of the cookie.
    -   `hostOnly` String - Whether the cookie is a host-only cookie.
    -   `path` String - The path of the cookie.
    -   `secure` Boolean - Whether the cookie is marked as secure.
    -   `httpOnly` Boolean - Whether the cookie is marked as HTTP only.
    -   `session` Boolean - Whether the cookie is a session cookie or a
        persistent cookie with an expiration date.
    -   `expirationDate` Double (optional) - The expiration date of the
        cookie as the number of seconds since the UNIX epoch. Not
        provided for session cookies.

#### `ses.cookies.set(details, callback)`

-   `details` Object
    -   `url` String - Retrieves cookies which are associated with `url`
    -   `name` String - The name of the cookie. Empty by default
        if omitted.
    -   `value` String - The value of the cookie. Empty by default
        if omitted.
    -   `domain` String - The domain of the cookie. Empty by default
        if omitted.
    -   `path` String - The path of the cookie. Empty by default
        if omitted.
    -   `secure` Boolean - Whether the cookie should be marked
        as Secure. Defaults to false.
    -   `session` Boolean - Whether the cookie should be marked
        as HttpOnly. Defaults to false.
    -   `expirationDate` Double - The expiration date of the cookie as
        the number of seconds since the UNIX epoch. If omitted, the
        cookie becomes a session cookie.
-   `callback` Function

Sets the cookie with `details`, `callback` will be called with
`callback(error)` on complete.

#### `ses.cookies.remove(url, name, callback)`

-   `url` String - The URL associated with the cookie.
-   `name` String - The name of cookie to remove.
-   `callback` Function

Removes the cookies matching `url` and `name`, `callback` will called
with `callback()` on complete.

#### `ses.getCacheSize(callback)`

-   `callback` Function
    -   `size` Integer - Cache size used in bytes.

Returns the session's current cache size.

#### `ses.clearCache(callback)`

-   `callback` Function - Called when operation is done

Clears the session’s HTTP cache.

#### `ses.clearStorageData([options, ]callback)`

-   `options` Object (optional)
    -   `origin` String - Should follow `window.location.origin`’s
        representation `scheme://host:port`.
    -   `storages` Array - The types of storages to clear, can contain:
        `appcache`, `cookies`, `filesystem`, `indexdb`, `local storage`,
        `shadercache`, `websql`, `serviceworkers`
    -   `quotas` Array - The types of quotas to clear, can contain:
        `temporary`, `persistent`, `syncable`.
-   `callback` Function - Called when operation is done.

Clears the data of web storages.

#### `ses.flushStorageData()`

Writes any unwritten DOMStorage data to disk.

#### `ses.setProxy(config, callback)`

-   `config` Object
    -   `pacScript` String - The URL associated with the PAC file.
    -   `proxyRules` String - Rules indicating which proxies to use.
-   `callback` Function - Called when operation is done.

Sets the proxy settings.

When `pacScript` and `proxyRules` are provided together, the
`proxyRules` option is ignored and `pacScript` configuration is applied.

The `proxyRules` has to follow the rules bellow:

    proxyRules = schemeProxies[";"<schemeProxies>]
    schemeProxies = [<urlScheme>"="]<proxyURIList>
    urlScheme = "http" | "https" | "ftp" | "socks"
    proxyURIList = <proxyURL>[","<proxyURIList>]
    proxyURL = [<proxyScheme>"://"]<proxyHost>[":"<proxyPort>]

For example:

-   `http=foopy:80;ftp=foopy2` - Use HTTP proxy `foopy:80` for `http://`
    URLs, and HTTP proxy `foopy2:80` for `ftp://` URLs.
-   `foopy:80` - Use HTTP proxy `foopy:80` for all URLs.
-   `foopy:80,bar,direct://` - Use HTTP proxy `foopy:80` for all URLs,
    failing over to `bar` if `foopy:80` is unavailable, and after that
    using no proxy.
-   `socks4://foopy` - Use SOCKS v4 proxy `foopy:1080` for all URLs.
-   `http=foopy,socks5://bar.com` - Use HTTP proxy `foopy` for http
    URLs, and fail over to the SOCKS5 proxy `bar.com` if `foopy`
    is unavailable.
-   `http=foopy,direct://` - Use HTTP proxy `foopy` for http URLs, and
    use no proxy if `foopy` is unavailable.
-   `http=foopy;socks=foopy2` - Use HTTP proxy `foopy` for http URLs,
    and use `socks4://foopy2` for all other URLs.

### `ses.resolveProxy(url, callback)`

-   `url` URL
-   `callback` Function

Resolves the proxy information for `url`. The `callback` will be called
with `callback(proxy)` when the request is performed.

#### `ses.setDownloadPath(path)`

-   `path` String - The download location

Sets download saving directory. By default, the download directory will
be the `Downloads` under the respective app folder.

#### `ses.enableNetworkEmulation(options)`

-   `options` Object
    -   `offline` Boolean - Whether to emulate network outage.
    -   `latency` Double - RTT in ms
    -   `downloadThroughput` Double - Download rate in Bps
    -   `uploadThroughput` Double - Upload rate in Bps

Emulates network with the given configuration for the `session`.

    // To emulate a GPRS connection with 50kbps throughput and 500 ms latency.
    window.webContents.session.enableNetworkEmulation({
        latency: 500,
        downloadThroughput: 6400,
        uploadThroughput: 6400
    });

    // To emulate a network outage.
    window.webContents.session.enableNetworkEmulation({offline: true});

#### `ses.disableNetworkEmulation()`

Disables any network emulation already active for the `session`. Resets
to the original network configuration.

#### `ses.setCertificateVerifyProc(proc)`

-   `proc` Function

Sets the certificate verify proc for `session`, the `proc` will be
called with `proc(hostname, certificate, callback)` whenever a server
certificate verification is requested. Calling `callback(true)` accepts
the certificate, calling `callback(false)` rejects it.

Calling `setCertificateVerifyProc(null)` will revert back to default
certificate verify proc.

    myWindow.webContents.session.setCertificateVerifyProc(function(hostname, cert, callback) {
      if (hostname == 'github.com')
        callback(true);
      else
        callback(false);
    });

#### `ses.setPermissionRequestHandler(handler)`

-   `handler` Function
    -   `webContents` Object - [WebContents](web-contents.md) requesting
        the permission.
    -   `permission` String - Enum of 'media', 'geolocation',
        'notifications', 'midiSysex', 'pointerLock', 'fullscreen'.
    -   `callback` Function - Allow or deny the permission.

Sets the handler which can be used to respond to permission requests for
the `session`. Calling `callback(true)` will allow the permission and
`callback(false)` will reject it.

    session.fromPartition(partition).setPermissionRequestHandler(function(webContents, permission, callback) {
      if (webContents.getURL() === host) {
        if (permission == "notifications") {
          callback(false); // denied.
          return;
        }
      }

      callback(true);
    });

#### `ses.clearHostResolverCache([callback])`

-   `callback` Function (optional) - Called when operation is done.

Clears the host resolver cache.

#### `ses.webRequest`

The `webRequest` API set allows to intercept and modify contents of a
request at various stages of its lifetime.

Each API accepts an optional `filter` and a `listener`, the `listener`
will be called with `listener(details)` when the API's event has
happened, the `details` is an object that describes the request. Passing
`null` as `listener` will unsubscribe from the event.

The `filter` is an object that has an `urls` property, which is an Array
of URL patterns that will be used to filter out the requests that do not
match the URL patterns. If the `filter` is omitted then all requests
will be matched.

For certain events the `listener` is passed with a `callback`, which
should be called with an `response` object when `listener` has done its
work.

    // Modify the user agent for all requests to the following urls.
    var filter = {
      urls: ["https://*.github.com/*", "*://electron.github.io"]
    };

    session.defaultSession.webRequest.onBeforeSendHeaders(filter, function(details, callback) {
      details.requestHeaders['User-Agent'] = "MyAgent";
      callback({cancel: false, requestHeaders: details.requestHeaders});
    });

#### `ses.webRequest.onBeforeRequest([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details, callback)` when a
request is about to occur.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `uploadData` Array (optional)
-   `callback` Function

The `uploadData` is an array of `data` objects:

-   `data` Object
    -   `bytes` Buffer - Content being sent.
    -   `file` String - Path of file being uploaded.

The `callback` has to be called with an `response` object:

-   `response` Object
    -   `cancel` Boolean (optional)
    -   `redirectURL` String (optional) - The original request is
        prevented from being sent or completed, and is instead
        redirected to the given URL.

#### `ses.webRequest.onBeforeSendHeaders([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details, callback)` before
sending an HTTP request, once the request headers are available. This
may occur after a TCP connection is made to the server, but before any
http data is sent.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `requestHeaders` Object
-   `callback` Function

The `callback` has to be called with an `response` object:

-   `response` Object
    -   `cancel` Boolean (optional)
    -   `requestHeaders` Object (optional) - When provided, request will
        be made with these headers.

#### `ses.webRequest.onSendHeaders([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` just before a
request is going to be sent to the server, modifications of previous
`onBeforeSendHeaders` response are visible by the time this listener is
fired.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `requestHeaders` Object

#### `ses.webRequest.onHeadersReceived([filter,] listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details, callback)` when
HTTP response headers of a request have been received.

-   `details` Object
    -   `id` String
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `statusLine` String
    -   `statusCode` Integer
    -   `responseHeaders` Object
-   `callback` Function

The `callback` has to be called with an `response` object:

-   `response` Object
    -   `cancel` Boolean
    -   `responseHeaders` Object (optional) - When provided, the server
        is assumed to have responded with these headers.

#### `ses.webRequest.onResponseStarted([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` when first byte
of the response body is received. For HTTP requests, this means that the
status line and response headers are available.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `responseHeaders` Object
    -   `fromCache` Boolean - Indicates whether the response was fetched
        from disk cache.
    -   `statusCode` Integer
    -   `statusLine` String

#### `ses.webRequest.onBeforeRedirect([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` when a server
initiated redirect is about to occur.

-   `details` Object
    -   `id` String
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `redirectURL` String
    -   `statusCode` Integer
    -   `ip` String (optional) - The server IP address that the request
        was actually sent to.
    -   `fromCache` Boolean
    -   `responseHeaders` Object

#### `ses.webRequest.onCompleted([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` when a request is
completed.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `responseHeaders` Object
    -   `fromCache` Boolean
    -   `statusCode` Integer
    -   `statusLine` String

#### `ses.webRequest.onErrorOccurred([filter, ]listener)`

-   `filter` Object
-   `listener` Function

The `listener` will be called with `listener(details)` when an error
occurs.

-   `details` Object
    -   `id` Integer
    -   `url` String
    -   `method` String
    -   `resourceType` String
    -   `timestamp` Double
    -   `fromCache` Boolean
    -   `error` String - The error description.

shell
=====

The `shell` module provides functions related to desktop integration.

An example of opening a URL in the user's default browser:

    const shell = require('electron').shell;

    shell.openExternal('https://github.com');

Methods
-------

The `shell` module has the following methods:

### `shell.showItemInFolder(fullPath)`

-   `fullPath` String

Show the given file in a file manager. If possible, select the file.

### `shell.openItem(fullPath)`

-   `fullPath` String

Open the given file in the desktop's default manner.

### `shell.openExternal(url[, options])`

-   `url` String
-   `options` Object (optional) *OS X*
    -   `activate` Boolean - `true` to bring the opened application to
        the foreground. The default is `true`.

Open the given external protocol URL in the desktop's default manner.
(For example, mailto: URLs in the user's default mail agent.) Returns
true if an application was available to open the URL, false otherwise.

### `shell.moveItemToTrash(fullPath)`

-   `fullPath` String

Move the given file to trash and returns a boolean status for the
operation.

### `shell.beep()`

Play the beep sound.

Synopsis
========

All of [Node.js's built-in modules](http://nodejs.org/api/) are
available in Electron and third-party node modules also fully supported
as well (including the [native
modules](../tutorial/using-native-node-modules.md)).

Electron also provides some extra built-in modules for developing native
desktop applications. Some modules are only available in the main
process, some are only available in the renderer process (web page), and
some can be used in both processes.

The basic rule is: if a module is
[GUI](https://en.wikipedia.org/wiki/Graphical_user_interface) or
low-level system related, then it should be only available in the main
process. You need to be familiar with the concept of [main process vs.
renderer process](../tutorial/quick-start.md#the-main-process) scripts
to be able to use those modules.

The main process script is just like a normal Node.js script:

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    var window = null;

    app.on('ready', function() {
      window = new BrowserWindow({width: 800, height: 600});
      window.loadURL('https://github.com');
    });

The renderer process is no different than a normal web page, except for
the extra ability to use node modules:

    <!DOCTYPE html>
    <html>
    <body>
    <script>
      const remote = require('electron').remote;
      console.log(remote.app.getVersion());
    </script>
    </body>
    </html>

To run your app, read [Run your
app](../tutorial/quick-start.md#run-your-app).

Destructuring assignment
------------------------

If you are using CoffeeScript or Babel, you can also use [destructuring
assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
to make it easier to use built-in modules:

    const {app, BrowserWindow} = require('electron')

However if you are using plain JavaScript, you have to wait until Chrome
fully supports ES6.

Disable old styles of using built-in modules
--------------------------------------------

Before v0.35.0, all built-in modules have to be used in the form of
`require('module-name')`, though it has [many
disadvantages](https://github.com/electron/electron/issues/387), we are
still supporting it for compatibility with old apps.

To disable the old styles completely, you can set the
`ELECTRON_HIDE_INTERNAL_MODULES` environment variable:

    process.env.ELECTRON_HIDE_INTERNAL_MODULES = 'true'

Or call the `hideInternalModules` API:

    require('electron').hideInternalModules()

Tray
====

A `Tray` represents an icon in an operating system's notification area,
it is usually attached with a context menu.

    const electron = require('electron');
    const app = electron.app;
    const Menu = electron.Menu;
    const Tray = electron.Tray;

    var appIcon = null;
    app.on('ready', function(){
      appIcon = new Tray('/path/to/my/icon');
      var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
      ]);
      appIcon.setToolTip('This is my application.');
      appIcon.setContextMenu(contextMenu);
    });

**Platform limitations:**

-   On Linux the app indicator will be used if it is supported,
    otherwise `GtkStatusIcon` will be used instead.
-   On Linux distributions that only have app indicator support, you
    have to install `libappindicator1` to make the tray icon work.
-   App indicator will only be shown when it has a context menu.
-   When app indicator is used on Linux, the `click` event is ignored.
-   On Linux in order for changes made to individual `MenuItem`s to take
    effect, you have to call `setContextMenu` again. For example:

&lt;!-- --&gt;

    contextMenu.items[2].checked = false;
    appIcon.setContextMenu(contextMenu);

If you want to keep exact same behaviors on all platforms, you should
not rely on the `click` event and always attach a context menu to the
tray icon.

Class: Tray
-----------

`Tray` is an
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### `new Tray(image)`

-   `image` [NativeImage](native-image.md)

Creates a new tray icon associated with the `image`.

Events
------

The `Tray` module emits the following events:

**Note:** Some events are only available on specific operating systems
and are labeled as such.

### Event: 'click'

-   `event` Event
    -   `altKey` Boolean
    -   `shiftKey` Boolean
    -   `ctrlKey` Boolean
    -   `metaKey` Boolean
-   `bounds` Object - the bounds of tray icon.
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer

Emitted when the tray icon is clicked.

**Note:** The `bounds` payload is only implemented on OS X and Windows.

### Event: 'right-click' *OS X* *Windows*

-   `event` Event
    -   `altKey` Boolean
    -   `shiftKey` Boolean
    -   `ctrlKey` Boolean
    -   `metaKey` Boolean
-   `bounds` Object - the bounds of tray icon.
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer

Emitted when the tray icon is right clicked.

### Event: 'double-click' *OS X* *Windows*

-   `event` Event
    -   `altKey` Boolean
    -   `shiftKey` Boolean
    -   `ctrlKey` Boolean
    -   `metaKey` Boolean
-   `bounds` Object - the bounds of tray icon
    -   `x` Integer
    -   `y` Integer
    -   `width` Integer
    -   `height` Integer

Emitted when the tray icon is double clicked.

### Event: 'balloon-show' *Windows*

Emitted when the tray balloon shows.

### Event: 'balloon-click' *Windows*

Emitted when the tray balloon is clicked.

### Event: 'balloon-closed' *Windows*

Emitted when the tray balloon is closed because of timeout or user
manually closes it.

### Event: 'drop' *OS X*

Emitted when any dragged items are dropped on the tray icon.

### Event: 'drop-files' *OS X*

-   `event`
-   `files` Array - the file path of dropped files.

Emitted when dragged files are dropped in the tray icon.

### Event: 'drag-enter' *OS X*

Emitted when a drag operation enters the tray icon.

### Event: 'drag-leave' *OS X*

Emitted when a drag operation exits the tray icon.

### Event: 'drag-end' *OS X*

Emitted when a drag operation ends on the tray or ends at another
location.

Methods
-------

The `Tray` module has the following methods:

**Note:** Some methods are only available on specific operating systems
and are labeled as such.

### `Tray.destroy()`

Destroys the tray icon immediately.

### `Tray.setImage(image)`

-   `image` [NativeImage](native-image.md)

Sets the `image` associated with this tray icon.

### `Tray.setPressedImage(image)` *OS X*

-   `image` [NativeImage](native-image.md)

Sets the `image` associated with this tray icon when pressed on OS X.

### `Tray.setToolTip(toolTip)`

-   `toolTip` String

Sets the hover text for this tray icon.

### `Tray.setTitle(title)` *OS X*

-   `title` String

Sets the title displayed aside of the tray icon in the status bar.

### `Tray.setHighlightMode(highlight)` *OS X*

-   `highlight` Boolean

Sets whether the tray icon's background becomes highlighted (in blue)
when the tray icon is clicked. Defaults to true.

### `Tray.displayBalloon(options)` *Windows*

-   `options` Object
    -   `icon` [NativeImage](native-image.md)
    -   `title` String
    -   `content` String

Displays a tray balloon.

### `Tray.popUpContextMenu([menu, position])` *OS X* *Windows*

-   `menu` Menu (optional)
-   `position` Object (optional) - The pop up position.
    -   `x` Integer
    -   `y` Integer

Popups the context menu of tray icon. When `menu` is passed, the `menu`
will showed instead of the tray's context menu.

The `position` is only available on Windows, and it is (0, 0) by
default.

### `Tray.setContextMenu(menu)`

-   `menu` Menu

Sets the context menu for this icon.

webContents
===========

`webContents` is an
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

It is responsible for rendering and controlling a web page and is a
property of the [`BrowserWindow`](browser-window.md) object. An example
of accessing the `webContents` object:

    const BrowserWindow = require('electron').BrowserWindow;

    var win = new BrowserWindow({width: 800, height: 1500});
    win.loadURL("http://github.com");

    var webContents = win.webContents;

Events
------

The `webContents` object emits the following events:

### Event: 'did-finish-load'

Emitted when the navigation is done, i.e. the spinner of the tab has
stopped spinning, and the `onload` event was dispatched.

### Event: 'did-fail-load'

Returns:

-   `event` Event
-   `errorCode` Integer
-   `errorDescription` String
-   `validatedURL` String
-   `isMainFrame` Boolean

This event is like `did-finish-load` but emitted when the load failed or
was cancelled, e.g. `window.stop()` is invoked. The full list of error
codes and their meaning is available
[here](https://code.google.com/p/chromium/codesearch#chromium/src/net/base/net_error_list.h).

### Event: 'did-frame-finish-load'

Returns:

-   `event` Event
-   `isMainFrame` Boolean

Emitted when a frame has done navigation.

### Event: 'did-start-loading'

Corresponds to the points in time when the spinner of the tab started
spinning.

### Event: 'did-stop-loading'

Corresponds to the points in time when the spinner of the tab stopped
spinning.

### Event: 'did-get-response-details'

Returns:

-   `event` Event
-   `status` Boolean
-   `newURL` String
-   `originalURL` String
-   `httpResponseCode` Integer
-   `requestMethod` String
-   `referrer` String
-   `headers` Object

Emitted when details regarding a requested resource are available.
`status` indicates the socket connection to download the resource.

### Event: 'did-get-redirect-request'

Returns:

-   `event` Event
-   `oldURL` String
-   `newURL` String
-   `isMainFrame` Boolean
-   `httpResponseCode` Integer
-   `requestMethod` String
-   `referrer` String
-   `headers` Object

Emitted when a redirect is received while requesting a resource.

### Event: 'dom-ready'

Returns:

-   `event` Event

Emitted when the document in the given frame is loaded.

### Event: 'page-favicon-updated'

Returns:

-   `event` Event
-   `favicons` Array - Array of URLs

Emitted when page receives favicon urls.

### Event: 'new-window'

Returns:

-   `event` Event
-   `url` String
-   `frameName` String
-   `disposition` String - Can be `default`, `foreground-tab`,
    `background-tab`, `new-window` and `other`.
-   `options` Object - The options which will be used for creating the
    new `BrowserWindow`.

Emitted when the page requests to open a new window for a `url`. It
could be requested by `window.open` or an external link like
`<a target='_blank'>`.

By default a new `BrowserWindow` will be created for the `url`.

Calling `event.preventDefault()` will prevent creating new windows.

### Event: 'will-navigate'

Returns:

-   `event` Event
-   `url` String

Emitted when a user or the page wants to start navigation. It can happen
when the `window.location` object is changed or a user clicks a link in
the page.

This event will not emit when the navigation is started programmatically
with APIs like `webContents.loadURL` and `webContents.back`.

It is also not emitted for in-page navigations, such as clicking anchor
links or updating the `window.location.hash`. Use `did-navigate-in-page`
event for this purpose.

Calling `event.preventDefault()` will prevent the navigation.

### Event: 'did-navigate'

Returns:

-   `event` Event
-   `url` String

Emitted when a navigation is done.

This event is not emitted for in-page navigations, such as clicking
anchor links or updating the `window.location.hash`. Use
`did-navigate-in-page` event for this purpose.

### Event: 'did-navigate-in-page'

Returns:

-   `event` Event
-   `url` String

Emitted when an in-page navigation happened.

When in-page navigation happens, the page URL changes but does not cause
navigation outside of the page. Examples of this occurring are when
anchor links are clicked or when the DOM `hashchange` event is
triggered.

### Event: 'crashed'

Emitted when the renderer process has crashed.

### Event: 'plugin-crashed'

Returns:

-   `event` Event
-   `name` String
-   `version` String

Emitted when a plugin process has crashed.

### Event: 'destroyed'

Emitted when `webContents` is destroyed.

### Event: 'devtools-opened'

Emitted when DevTools is opened.

### Event: 'devtools-closed'

Emitted when DevTools is closed.

### Event: 'devtools-focused'

Emitted when DevTools is focused / opened.

### Event: 'certificate-error'

Returns:

-   `event` Event
-   `url` URL
-   `error` String - The error code
-   `certificate` Object
    -   `data` Buffer - PEM encoded data
    -   `issuerName` String
-   `callback` Function

Emitted when failed to verify the `certificate` for `url`.

The usage is the same with [the `certificate-error` event of
`app`](app.md#event-certificate-error).

### Event: 'select-client-certificate'

Returns:

-   `event` Event
-   `url` URL
-   `certificateList` \[Objects\]
    -   `data` Buffer - PEM encoded data
    -   `issuerName` String - Issuer's Common Name
-   `callback` Function

Emitted when a client certificate is requested.

The usage is the same with [the `select-client-certificate` event of
`app`](app.md#event-select-client-certificate).

### Event: 'login'

Returns:

-   `event` Event
-   `request` Object
    -   `method` String
    -   `url` URL
    -   `referrer` URL
-   `authInfo` Object
    -   `isProxy` Boolean
    -   `scheme` String
    -   `host` String
    -   `port` Integer
    -   `realm` String
-   `callback` Function

Emitted when `webContents` wants to do basic auth.

The usage is the same with [the `login` event of
`app`](app.md#event-login).

### Event: 'found-in-page'

Returns:

-   `event` Event
-   `result` Object
    -   `requestId` Integer
    -   `finalUpdate` Boolean - Indicates if more responses are
        to follow.
    -   `activeMatchOrdinal` Integer (optional) - Position of the
        active match.
    -   `matches` Integer (optional) - Number of Matches.
    -   `selectionArea` Object (optional) - Coordinates of first
        match region.

Emitted when a result is available for
[`webContents.findInPage`](web-contents.md#webcontentsfindinpage)
request.

### Event: 'media-started-playing'

Emitted when media starts playing.

### Event: 'media-paused'

Emitted when media is paused or done playing.

### Event: 'did-change-theme-color'

Emitted when a page's theme color changes. This is usually due to
encountering a meta tag:

    <meta name='theme-color' content='#ff0000'>

### Event: 'cursor-changed'

Returns:

-   `event` Event
-   `type` String
-   `image` NativeImage (optional)
-   `scale` Float (optional)

Emitted when the cursor's type changes. The `type` parameter can be
`default`, `crosshair`, `pointer`, `text`, `wait`, `help`, `e-resize`,
`n-resize`, `ne-resize`, `nw-resize`, `s-resize`, `se-resize`,
`sw-resize`, `w-resize`, `ns-resize`, `ew-resize`, `nesw-resize`,
`nwse-resize`, `col-resize`, `row-resize`, `m-panning`, `e-panning`,
`n-panning`, `ne-panning`, `nw-panning`, `s-panning`, `se-panning`,
`sw-panning`, `w-panning`, `move`, `vertical-text`, `cell`,
`context-menu`, `alias`, `progress`, `nodrop`, `copy`, `none`,
`not-allowed`, `zoom-in`, `zoom-out`, `grab`, `grabbing`, `custom`.

If the `type` parameter is `custom`, the `image` parameter will hold the
custom cursor image in a `NativeImage`, and the `scale` will hold
scaling information for the image.

Instance Methods
----------------

The `webContents` object has the following instance methods:

### `webContents.loadURL(url[, options])`

-   `url` URL
-   `options` Object (optional)
    -   `httpReferrer` String - A HTTP Referrer url.
    -   `userAgent` String - A user agent originating the request.
    -   `extraHeaders` String - Extra headers separated by "\\n"

Loads the `url` in the window, the `url` must contain the protocol
prefix, e.g. the `http://` or `file://`. If the load should bypass http
cache then use the `pragma` header to achieve it.

    const options = {"extraHeaders" : "pragma: no-cache\n"}
    webContents.loadURL(url, options)

### `webContents.downloadURL(url)`

-   `url` URL

Initiates a download of the resource at `url` without navigating. The
`will-download` event of `session` will be triggered.

### `webContents.getURL()`

Returns URL of the current web page.

    var win = new BrowserWindow({width: 800, height: 600});
    win.loadURL("http://github.com");

    var currentURL = win.webContents.getURL();

### `webContents.getTitle()`

Returns the title of the current web page.

### `webContents.isLoading()`

Returns whether web page is still loading resources.

### `webContents.isWaitingForResponse()`

Returns whether the web page is waiting for a first-response from the
main resource of the page.

### `webContents.stop()`

Stops any pending navigation.

### `webContents.reload()`

Reloads the current web page.

### `webContents.reloadIgnoringCache()`

Reloads current page and ignores cache.

### `webContents.canGoBack()`

Returns whether the browser can go back to previous web page.

### `webContents.canGoForward()`

Returns whether the browser can go forward to next web page.

### `webContents.canGoToOffset(offset)`

-   `offset` Integer

Returns whether the web page can go to `offset`.

### `webContents.clearHistory()`

Clears the navigation history.

### `webContents.goBack()`

Makes the browser go back a web page.

### `webContents.goForward()`

Makes the browser go forward a web page.

### `webContents.goToIndex(index)`

-   `index` Integer

Navigates browser to the specified absolute web page index.

### `webContents.goToOffset(offset)`

-   `offset` Integer

Navigates to the specified offset from the "current entry".

### `webContents.isCrashed()`

Whether the renderer process has crashed.

### `webContents.setUserAgent(userAgent)`

-   `userAgent` String

Overrides the user agent for this web page.

### `webContents.getUserAgent()`

Returns a `String` representing the user agent for this web page.

### `webContents.insertCSS(css)`

-   `css` String

Injects CSS into the current web page.

### `webContents.executeJavaScript(code[, userGesture, callback])`

-   `code` String
-   `userGesture` Boolean (optional)
-   `callback` Function (optional) - Called after script has
    been executed.
    -   `result`

Evaluates `code` in page.

In the browser window some HTML APIs like `requestFullScreen` can only
be invoked by a gesture from the user. Setting `userGesture` to `true`
will remove this limitation.

### `webContents.setAudioMuted(muted)`

-   `muted` Boolean

Mute the audio on the current web page.

### `webContents.isAudioMuted()`

Returns whether this page has been muted.

### `webContents.undo()`

Executes the editing command `undo` in web page.

### `webContents.redo()`

Executes the editing command `redo` in web page.

### `webContents.cut()`

Executes the editing command `cut` in web page.

### `webContents.copy()`

Executes the editing command `copy` in web page.

### `webContents.paste()`

Executes the editing command `paste` in web page.

### `webContents.pasteAndMatchStyle()`

Executes the editing command `pasteAndMatchStyle` in web page.

### `webContents.delete()`

Executes the editing command `delete` in web page.

### `webContents.selectAll()`

Executes the editing command `selectAll` in web page.

### `webContents.unselect()`

Executes the editing command `unselect` in web page.

### `webContents.replace(text)`

-   `text` String

Executes the editing command `replace` in web page.

### `webContents.replaceMisspelling(text)`

-   `text` String

Executes the editing command `replaceMisspelling` in web page.

### `webContents.insertText(text)`

-   `text` String

Inserts `text` to the focused element.

### `webContents.findInPage(text[, options])`

-   `text` String - Content to be searched, must not be empty.
-   `options` Object (optional)
    -   `forward` Boolean - Whether to search forward or backward,
        defaults to `true`.
    -   `findNext` Boolean - Whether the operation is first request or a
        follow up, defaults to `false`.
    -   `matchCase` Boolean - Whether search should be case-sensitive,
        defaults to `false`.
    -   `wordStart` Boolean - Whether to look only at the start
        of words. defaults to `false`.
    -   `medialCapitalAsWordStart` Boolean - When combined with
        `wordStart`, accepts a match in the middle of a word if the
        match begins with an uppercase letter followed by a lowercase
        or non-letter. Accepts several other intra-word matches,
        defaults to `false`.

Starts a request to find all matches for the `text` in the web page and
returns an `Integer` representing the request id used for the request.
The result of the request can be obtained by subscribing to
[`found-in-page`](web-contents.md#event-found-in-page) event.

### `webContents.stopFindInPage(action)`

-   `action` String - Specifies the action to take place when ending
    [`webContents.findInPage`](web-contents.md#webcontentfindinpage) request.
    -   `clearSelection` - Translate the selection into a
        normal selection.
    -   `keepSelection` - Clear the selection.
    -   `activateSelection` - Focus and click the selection node.

Stops any `findInPage` request for the `webContents` with the provided
`action`.

    webContents.on('found-in-page', function(event, result) {
      if (result.finalUpdate)
        webContents.stopFindInPage("clearSelection");
    });

    const requestId = webContents.findInPage("api");

### `webContents.hasServiceWorker(callback)`

-   `callback` Function

Checks if any ServiceWorker is registered and returns a boolean as
response to `callback`.

### `webContents.unregisterServiceWorker(callback)`

-   `callback` Function

Unregisters any ServiceWorker if present and returns a boolean as
response to `callback` when the JS promise is fulfilled or false when
the JS promise is rejected.

### `webContents.print([options])`

-   `options` Object (optional)
    -   `silent` Boolean - Don't ask user for print settings. Default is
        `false`.
    -   `printBackground` Boolean - Also prints the background color and
        image of the web page. Default is `false`.

Prints window's web page. When `silent` is set to `false`, Electron will
pick up system's default printer and default settings for printing.

Calling `window.print()` in web page is equivalent to calling
`webContents.print({silent: false, printBackground: false})`.

**Note:** On Windows, the print API relies on `pdf.dll`. If your
application doesn't need the print feature, you can safely remove
`pdf.dll` to reduce binary size.

### `webContents.printToPDF(options, callback)`

-   `options` Object
    -   `marginsType` Integer - Specifies the type of margins to use.
        Uses 0 for default margin, 1 for no margin, and 2 for
        minimum margin.
    -   `pageSize` String - Specify page size of the generated PDF. Can
        be `A3`, `A4`, `A5`, `Legal`, `Letter` and `Tabloid`.
    -   `printBackground` Boolean - Whether to print CSS backgrounds.
    -   `printSelectionOnly` Boolean - Whether to print selection only.
    -   `landscape` Boolean - `true` for landscape, `false`
        for portrait.
-   `callback` Function

Prints window's web page as PDF with Chromium's preview printing custom
settings.

The `callback` will be called with `callback(error, data)` on
completion. The `data` is a `Buffer` that contains the generated PDF
data.

By default, an empty `options` will be regarded as:

    {
      marginsType: 0,
      printBackground: false,
      printSelectionOnly: false,
      landscape: false
    }

    const BrowserWindow = require('electron').BrowserWindow;
    const fs = require('fs');

    var win = new BrowserWindow({width: 800, height: 600});
    win.loadURL("http://github.com");

    win.webContents.on("did-finish-load", function() {
      // Use default printing options
      win.webContents.printToPDF({}, function(error, data) {
        if (error) throw error;
        fs.writeFile("/tmp/print.pdf", data, function(error) {
          if (error)
            throw error;
          console.log("Write PDF successfully.");
        })
      })
    });

### `webContents.addWorkSpace(path)`

-   `path` String

Adds the specified path to DevTools workspace. Must be used after
DevTools creation:

    mainWindow.webContents.on('devtools-opened', function() {
      mainWindow.webContents.addWorkSpace(__dirname);
    });

### `webContents.removeWorkSpace(path)`

-   `path` String

Removes the specified path from DevTools workspace.

### `webContents.openDevTools([options])`

-   `options` Object (optional)
    -   `detach` Boolean - opens DevTools in a new window

Opens the devtools.

### `webContents.closeDevTools()`

Closes the devtools.

### `webContents.isDevToolsOpened()`

Returns whether the devtools is opened.

### `webContents.isDevToolsFocused()`

Returns whether the devtools view is focused .

### `webContents.toggleDevTools()`

Toggles the developer tools.

### `webContents.inspectElement(x, y)`

-   `x` Integer
-   `y` Integer

Starts inspecting element at position (`x`, `y`).

### `webContents.inspectServiceWorker()`

Opens the developer tools for the service worker context.

### `webContents.send(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Send an asynchronous message to renderer process via `channel`, you can
also send arbitrary arguments. Arguments will be serialized in JSON
internally and hence no functions or prototype chain will be included.

The renderer process can handle the message by listening to `channel`
with the `ipcRenderer` module.

An example of sending messages from the main process to the renderer
process:

    // In the main process.
    var window = null;
    app.on('ready', function() {
      window = new BrowserWindow({width: 800, height: 600});
      window.loadURL('file://' + __dirname + '/index.html');
      window.webContents.on('did-finish-load', function() {
        window.webContents.send('ping', 'whoooooooh!');
      });
    });

    <!-- index.html -->
    <html>
    <body>
      <script>
        require('electron').ipcRenderer.on('ping', function(event, message) {
          console.log(message);  // Prints "whoooooooh!"
        });
      </script>
    </body>
    </html>

### `webContents.enableDeviceEmulation(parameters)`

`parameters` Object, properties:

-   `screenPosition` String - Specify the screen type to emulate
    (default: `desktop`)
    -   `desktop`
    -   `mobile`
-   `screenSize` Object - Set the emulated screen size (screenPosition
    == mobile)
    -   `width` Integer - Set the emulated screen width
    -   `height` Integer - Set the emulated screen height
-   `viewPosition` Object - Position the view on the screen
    (screenPosition == mobile) (default: `{x: 0, y: 0}`)
    -   `x` Integer - Set the x axis offset from top left corner
    -   `y` Integer - Set the y axis offset from top left corner
-   `deviceScaleFactor` Integer - Set the device scale factor (if zero
    defaults to original device scale factor) (default: `0`)
-   `viewSize` Object - Set the emulated view size (empty means
    no override)
    -   `width` Integer - Set the emulated view width
    -   `height` Integer - Set the emulated view height
-   `fitToView` Boolean - Whether emulated view should be scaled down if
    necessary to fit into available space (default: `false`)
-   `offset` Object - Offset of the emulated view inside available space
    (not in fit to view mode) (default: `{x: 0, y: 0}`)
    -   `x` Float - Set the x axis offset from top left corner
    -   `y` Float - Set the y axis offset from top left corner
-   `scale` Float - Scale of emulated view inside available space (not
    in fit to view mode) (default: `1`)

Enable device emulation with the given parameters.

### `webContents.disableDeviceEmulation()`

Disable device emulation enabled by `webContents.enableDeviceEmulation`.

### `webContents.sendInputEvent(event)`

-   `event` Object
    -   `type` String (**required**) - The type of the event, can be
        `mouseDown`, `mouseUp`, `mouseEnter`, `mouseLeave`,
        `contextMenu`, `mouseWheel`, `mouseMove`, `keyDown`, `keyUp`,
        `char`.
    -   `modifiers` Array - An array of modifiers of the event, can
        include `shift`, `control`, `alt`, `meta`, `isKeypad`,
        `isAutoRepeat`, `leftButtonDown`, `middleButtonDown`,
        `rightButtonDown`, `capsLock`, `numLock`, `left`, `right`.

Sends an input `event` to the page.

For keyboard events, the `event` object also have following properties:

-   `keyCode` String (**required**) - The character that will be sent as
    the keyboard event. Should only use the valid key codes in
    [Accelerator](accelerator.md).

For mouse events, the `event` object also have following properties:

-   `x` Integer (**required**)
-   `y` Integer (**required**)
-   `button` String - The button pressed, can be `left`, `middle`,
    `right`
-   `globalX` Integer
-   `globalY` Integer
-   `movementX` Integer
-   `movementY` Integer
-   `clickCount` Integer

For the `mouseWheel` event, the `event` object also have following
properties:

-   `deltaX` Integer
-   `deltaY` Integer
-   `wheelTicksX` Integer
-   `wheelTicksY` Integer
-   `accelerationRatioX` Integer
-   `accelerationRatioY` Integer
-   `hasPreciseScrollingDeltas` Boolean
-   `canScroll` Boolean

### `webContents.beginFrameSubscription(callback)`

-   `callback` Function

Begin subscribing for presentation events and captured frames, the
`callback` will be called with `callback(frameBuffer)` when there is a
presentation event.

The `frameBuffer` is a `Buffer` that contains raw pixel data. On most
machines, the pixel data is effectively stored in 32bit BGRA format, but
the actual representation depends on the endianness of the processor
(most modern processors are little-endian, on machines with big-endian
processors the data is in 32bit ARGB format).

### `webContents.endFrameSubscription()`

End subscribing for frame presentation events.

### `webContents.savePage(fullPath, saveType, callback)`

-   `fullPath` String - The full file path.
-   `saveType` String - Specify the save type.
    -   `HTMLOnly` - Save only the HTML of the page.
    -   `HTMLComplete` - Save complete-html page.
    -   `MHTML` - Save complete-html page as MHTML.
-   `callback` Function - `function(error) {}`.
    -   `error` Error

Returns true if the process of saving page has been initiated
successfully.

    win.loadURL('https://github.com');

    win.webContents.on('did-finish-load', function() {
      win.webContents.savePage('/tmp/test.html', 'HTMLComplete', function(error) {
        if (!error)
          console.log("Save page successfully");
      });
    });

Instance Properties
-------------------

`WebContents` objects also have the following properties:

### `webContents.session`

Returns the [session](session.md) object used by this webContents.

### `webContents.hostWebContents`

Returns the `WebContents` that might own this `WebContents`.

### `webContents.devToolsWebContents`

Get the `WebContents` of DevTools for this `WebContents`.

**Note:** Users should never store this object because it may become
`null` when the DevTools has been closed.

### `webContents.debugger`

Debugger API serves as an alternate transport for [remote debugging
protocol](https://developer.chrome.com/devtools/docs/debugger-protocol).

    try {
      win.webContents.debugger.attach("1.1");
    } catch(err) {
      console.log("Debugger attach failed : ", err);
    };

    win.webContents.debugger.on('detach', function(event, reason) {
      console.log("Debugger detached due to : ", reason);
    });

    win.webContents.debugger.on('message', function(event, method, params) {
      if (method == "Network.requestWillBeSent") {
        if (params.request.url == "https://www.github.com")
          win.webContents.debugger.detach();
      }
    })

    win.webContents.debugger.sendCommand("Network.enable");

#### `webContents.debugger.attach([protocolVersion])`

-   `protocolVersion` String (optional) - Requested debugging
    protocol version.

Attaches the debugger to the `webContents`.

#### `webContents.debugger.isAttached()`

Returns a boolean indicating whether a debugger is attached to the
`webContents`.

#### `webContents.debugger.detach()`

Detaches the debugger from the `webContents`.

#### `webContents.debugger.sendCommand(method[, commandParams, callback])`

-   `method` String - Method name, should be one of the methods defined
    by the remote debugging protocol.
-   `commandParams` Object (optional) - JSON object with
    request parameters.
-   `callback` Function (optional) - Response
    -   `error` Object - Error message indicating the failure of
        the command.
    -   `result` Object - Response defined by the 'returns' attribute of
        the command description in the remote debugging protocol.

Send given command to the debugging target.

#### Event: 'detach'

-   `event` Event
-   `reason` String - Reason for detaching debugger.

Emitted when debugging session is terminated. This happens either when
`webContents` is closed or devtools is invoked for the attached
`webContents`.

#### Event: 'message'

-   `event` Event
-   `method` String - Method name.
-   `params` Object - Event parameters defined by the 'parameters'
    attribute in the remote debugging protocol.

Emitted whenever debugging target issues instrumentation event.

webFrame
========

The `web-frame` module allows you to customize the rendering of the
current web page.

An example of zooming current page to 200%.

    var webFrame = require('electron').webFrame;

    webFrame.setZoomFactor(2);

Methods
-------

The `web-frame` module has the following methods:

### `webFrame.setZoomFactor(factor)`

-   `factor` Number - Zoom factor.

Changes the zoom factor to the specified factor. Zoom factor is zoom
percent divided by 100, so 300% = 3.0.

### `webFrame.getZoomFactor()`

Returns the current zoom factor.

### `webFrame.setZoomLevel(level)`

-   `level` Number - Zoom level

Changes the zoom level to the specified level. The original size is 0
and each increment above or below represents zooming 20% larger or
smaller to default limits of 300% and 50% of original size,
respectively.

### `webFrame.getZoomLevel()`

Returns the current zoom level.

### `webFrame.setZoomLevelLimits(minimumLevel, maximumLevel)`

-   `minimumLevel` Number
-   `maximumLevel` Number

Sets the maximum and minimum zoom level.

### `webFrame.setSpellCheckProvider(language, autoCorrectWord, provider)`

-   `language` String
-   `autoCorrectWord` Boolean
-   `provider` Object

Sets a provider for spell checking in input fields and text areas.

The `provider` must be an object that has a `spellCheck` method that
returns whether the word passed is correctly spelled.

An example of using
[node-spellchecker](https://github.com/atom/node-spellchecker) as
provider:

    webFrame.setSpellCheckProvider("en-US", true, {
      spellCheck: function(text) {
        return !(require('spellchecker').isMisspelled(text));
      }
    });

### `webFrame.registerURLSchemeAsSecure(scheme)`

-   `scheme` String

Registers the `scheme` as secure scheme.

Secure schemes do not trigger mixed content warnings. For example,
`https` and `data` are secure schemes because they cannot be corrupted
by active network attackers.

### `webFrame.registerURLSchemeAsBypassingCSP(scheme)`

-   `scheme` String

Resources will be loaded from this `scheme` regardless of the current
page's Content Security Policy.

### `webFrame.registerURLSchemeAsPrivileged(scheme)`

-   `scheme` String

Registers the `scheme` as secure, bypasses content security policy for
resources, allows registering ServiceWorker and supports fetch API.

### `webFrame.insertText(text)`

-   `text` String

Inserts `text` to the focused element.

### `webFrame.executeJavaScript(code[, userGesture])`

-   `code` String
-   `userGesture` Boolean (optional) - Default is `false`.

Evaluates `code` in page.

In the browser window some HTML APIs like `requestFullScreen` can only
be invoked by a gesture from the user. Setting `userGesture` to `true`
will remove this limitation.

The `<webview>` tag
===================

Use the `webview` tag to embed 'guest' content (such as web pages) in
your Electron app. The guest content is contained within the `webview`
container. An embedded page within your app controls how the guest
content is laid out and rendered.

Unlike an `iframe`, the `webview` runs in a separate process than your
app. It doesn't have the same permissions as your web page and all
interactions between your app and embedded content will be asynchronous.
This keeps your app safe from the embedded content.

Example
-------

To embed a web page in your app, add the `webview` tag to your app's
embedder page (this is the app page that will display the guest
content). In its simplest form, the `webview` tag includes the `src` of
the web page and css styles that control the appearance of the `webview`
container:

    <webview id="foo" src="https://www.github.com/" style="display:inline-flex; width:640px; height:480px"></webview>

Please note that the `webview` tag's style uses `display:flex;`
internally to ensure the child `object` element fills the full height
and width of its `webview` container when used with traditional and
flexbox layouts (since v0.36.11). Please do not overwrite the default
`display:flex;` CSS property, unless specifying `display:inline-flex;`
for inline layout.

If you want to control the guest content in any way, you can write
JavaScript that listens for `webview` events and responds to those
events using the `webview` methods. Here's sample code with two event
listeners: one that listens for the web page to start loading, the other
for the web page to stop loading, and displays a "loading..." message
during the load time:

    <script>
      onload = function() {
        var webview = document.getElementById("foo");
        var indicator = document.querySelector(".indicator");

        var loadstart = function() {
          indicator.innerText = "loading...";
        }
        var loadstop = function() {
          indicator.innerText = "";
        }
        webview.addEventListener("did-start-loading", loadstart);
        webview.addEventListener("did-stop-loading", loadstop);
      }
    </script>

Tag Attributes
--------------

The `webview` tag has the following attributes:

### `src`

    <webview src="https://www.github.com/"></webview>

Returns the visible URL. Writing to this attribute initiates top-level
navigation.

Assigning `src` its own value will reload the current page.

The `src` attribute can also accept data URLs, such as
`data:text/plain,Hello, world!`.

### `autosize`

    <webview src="https://www.github.com/" autosize="on" minwidth="576" minheight="432"></webview>

If "on", the `webview` container will automatically resize within the
bounds specified by the attributes `minwidth`, `minheight`, `maxwidth`,
and `maxheight`. These constraints do not impact the `webview` unless
`autosize` is enabled. When `autosize` is enabled, the `webview`
container size cannot be less than the minimum values or greater than
the maximum.

### `nodeintegration`

    <webview src="http://www.google.com/" nodeintegration></webview>

If "on", the guest page in `webview` will have node integration and can
use node APIs like `require` and `process` to access low level system
resources.

**Note:** Node integration will always be disabled in the `webview` if
it is disabled on the parent window.

### `plugins`

    <webview src="https://www.github.com/" plugins></webview>

If "on", the guest page in `webview` will be able to use browser
plugins.

### `preload`

    <webview src="https://www.github.com/" preload="./test.js"></webview>

Specifies a script that will be loaded before other scripts run in the
guest page. The protocol of script's URL must be either `file:` or
`asar:`, because it will be loaded by `require` in guest page under the
hood.

When the guest page doesn't have node integration this script will still
have access to all Node APIs, but global objects injected by Node will
be deleted after this script has finished executing.

### `httpreferrer`

    <webview src="https://www.github.com/" httpreferrer="http://cheng.guru"></webview>

Sets the referrer URL for the guest page.

### `useragent`

    <webview src="https://www.github.com/" useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"></webview>

Sets the user agent for the guest page before the page is navigated to.
Once the page is loaded, use the `setUserAgent` method to change the
user agent.

### `disablewebsecurity`

    <webview src="https://www.github.com/" disablewebsecurity></webview>

If "on", the guest page will have web security disabled.

### partition

    <webview src="https://github.com" partition="persist:github"></webview>
    <webview src="http://electron.atom.io" partition="electron"></webview>

Sets the session used by the page. If `partition` starts with
`persist:`, the page will use a persistent session available to all
pages in the app with the same `partition`. if there is no `persist:`
prefix, the page will use an in-memory session. By assigning the same
`partition`, multiple pages can share the same session. If the
`partition` is unset then default session of the app will be used.

This value can only be modified before the first navigation, since the
session of an active renderer process cannot change. Subsequent attempts
to modify the value will fail with a DOM exception.

### `allowpopups`

    <webview src="https://www.github.com/" allowpopups></webview>

If "on", the guest page will be allowed to open new windows.

### `blinkfeatures`

    <webview src="https://www.github.com/" blinkfeatures="PreciseMemoryInfo, CSSVariables"></webview>

A list of strings which specifies the blink features to be enabled
separated by `,`. The full list of supported feature strings can be
found in the
[setFeatureEnabledFromString](https://code.google.com/p/chromium/codesearch#chromium/src/out/Debug/gen/blink/platform/RuntimeEnabledFeatures.cpp&sq=package:chromium&type=cs&l=527)
function.

Methods
-------

The `webview` tag has the following methods:

**Note:** The webview element must be loaded before using the methods.

**Example**

    webview.addEventListener("dom-ready", function() {
      webview.openDevTools();
    });

### `<webview>.loadURL(url[, options])`

-   `url` URL
-   `options` Object (optional)
    -   `httpReferrer` String - A HTTP Referrer url.
    -   `userAgent` String - A user agent originating the request.
    -   `extraHeaders` String - Extra headers separated by "\\n"

Loads the `url` in the webview, the `url` must contain the protocol
prefix, e.g. the `http://` or `file://`.

### `<webview>.getURL()`

Returns URL of guest page.

### `<webview>.getTitle()`

Returns the title of guest page.

### `<webview>.isLoading()`

Returns a boolean whether guest page is still loading resources.

### `<webview>.isWaitingForResponse()`

Returns a boolean whether the guest page is waiting for a first-response
for the main resource of the page.

### `<webview>.stop()`

Stops any pending navigation.

### `<webview>.reload()`

Reloads the guest page.

### `<webview>.reloadIgnoringCache()`

Reloads the guest page and ignores cache.

### `<webview>.canGoBack()`

Returns a boolean whether the guest page can go back.

### `<webview>.canGoForward()`

Returns a boolean whether the guest page can go forward.

### `<webview>.canGoToOffset(offset)`

-   `offset` Integer

Returns a boolean whether the guest page can go to `offset`.

### `<webview>.clearHistory()`

Clears the navigation history.

### `<webview>.goBack()`

Makes the guest page go back.

### `<webview>.goForward()`

Makes the guest page go forward.

### `<webview>.goToIndex(index)`

-   `index` Integer

Navigates to the specified absolute index.

### `<webview>.goToOffset(offset)`

-   `offset` Integer

Navigates to the specified offset from the "current entry".

### `<webview>.isCrashed()`

Whether the renderer process has crashed.

### `<webview>.setUserAgent(userAgent)`

-   `userAgent` String

Overrides the user agent for the guest page.

### `<webview>.getUserAgent()`

Returns a `String` representing the user agent for guest page.

### `<webview>.insertCSS(css)`

-   `css` String

Injects CSS into the guest page.

### `<webview>.executeJavaScript(code, userGesture, callback)`

-   `code` String
-   `userGesture` Boolean - Default `false`.
-   `callback` Function (optional) - Called after script has
    been executed.
    -   `result`

Evaluates `code` in page. If `userGesture` is set, it will create the
user gesture context in the page. HTML APIs like `requestFullScreen`,
which require user action, can take advantage of this option for
automation.

### `<webview>.openDevTools()`

Opens a DevTools window for guest page.

### `<webview>.closeDevTools()`

Closes the DevTools window of guest page.

### `<webview>.isDevToolsOpened()`

Returns a boolean whether guest page has a DevTools window attached.

### `<webview>.isDevToolsFocused()`

Returns a boolean whether DevTools window of guest page is focused.

### `<webview>.inspectElement(x, y)`

-   `x` Integer
-   `y` Integer

Starts inspecting element at position (`x`, `y`) of guest page.

### `<webview>.inspectServiceWorker()`

Opens the DevTools for the service worker context present in the guest
page.

### `<webview>.setAudioMuted(muted)`

-   `muted` Boolean

Set guest page muted.

### `<webview>.isAudioMuted()`

Returns whether guest page has been muted.

### `<webview>.undo()`

Executes editing command `undo` in page.

### `<webview>.redo()`

Executes editing command `redo` in page.

### `<webview>.cut()`

Executes editing command `cut` in page.

### `<webview>.copy()`

Executes editing command `copy` in page.

### `<webview>.paste()`

Executes editing command `paste` in page.

### `<webview>.pasteAndMatchStyle()`

Executes editing command `pasteAndMatchStyle` in page.

### `<webview>.delete()`

Executes editing command `delete` in page.

### `<webview>.selectAll()`

Executes editing command `selectAll` in page.

### `<webview>.unselect()`

Executes editing command `unselect` in page.

### `<webview>.replace(text)`

-   `text` String

Executes editing command `replace` in page.

### `<webview>.replaceMisspelling(text)`

-   `text` String

Executes editing command `replaceMisspelling` in page.

### `<webview>.insertText(text)`

-   `text` String

Inserts `text` to the focused element.

### `<webview>.findInPage(text[, options])`

-   `text` String - Content to be searched, must not be empty.
-   `options` Object (optional)
    -   `forward` Boolean - Whether to search forward or backward,
        defaults to `true`.
    -   `findNext` Boolean - Whether the operation is first request or a
        follow up, defaults to `false`.
    -   `matchCase` Boolean - Whether search should be case-sensitive,
        defaults to `false`.
    -   `wordStart` Boolean - Whether to look only at the start
        of words. defaults to `false`.
    -   `medialCapitalAsWordStart` Boolean - When combined with
        `wordStart`, accepts a match in the middle of a word if the
        match begins with an uppercase letter followed by a lowercase
        or non-letter. Accepts several other intra-word matches,
        defaults to `false`.

Starts a request to find all matches for the `text` in the web page and
returns an `Integer` representing the request id used for the request.
The result of the request can be obtained by subscribing to
[`found-in-page`](web-view-tag.md#event-found-in-page) event.

### `<webview>.stopFindInPage(action)`

-   `action` String - Specifies the action to take place when ending
    [`<webview>.findInPage`](web-view-tag.md#webviewtagfindinpage) request.
    -   `clearSelection` - Translate the selection into a
        normal selection.
    -   `keepSelection` - Clear the selection.
    -   `activateSelection` - Focus and click the selection node.

Stops any `findInPage` request for the `webview` with the provided
`action`.

### `<webview>.print([options])`

Prints `webview`'s web page. Same with `webContents.print([options])`.

### `<webview>.printToPDF(options, callback)`

Prints webview's web page as PDF, Same with
`webContents.printToPDF(options, callback)`

### `<webview>.send(channel[, arg1][, arg2][, ...])`

-   `channel` String
-   `arg` (optional)

Send an asynchronous message to renderer process via `channel`, you can
also send arbitrary arguments. The renderer process can handle the
message by listening to the `channel` event with the `ipcRenderer`
module.

See [webContents.send](web-contents.md#webcontentssendchannel-args) for
examples.

### `<webview>.sendInputEvent(event)`

-   `event` Object

Sends an input `event` to the page.

See
[webContents.sendInputEvent](web-contents.md##webcontentssendinputeventevent)
for detailed description of `event` object.

### `<webview>.getWebContents()`

Returns the [WebContents](web-contents.md) associated with this
`webview`.

DOM events
----------

The following DOM events are available to the `webview` tag:

### Event: 'load-commit'

Returns:

-   `url` String
-   `isMainFrame` Boolean

Fired when a load has committed. This includes navigation within the
current document as well as subframe document-level loads, but does not
include asynchronous resource loads.

### Event: 'did-finish-load'

Fired when the navigation is done, i.e. the spinner of the tab will stop
spinning, and the `onload` event is dispatched.

### Event: 'did-fail-load'

Returns:

-   `errorCode` Integer
-   `errorDescription` String
-   `validatedURL` String

This event is like `did-finish-load`, but fired when the load failed or
was cancelled, e.g. `window.stop()` is invoked.

### Event: 'did-frame-finish-load'

Returns:

-   `isMainFrame` Boolean

Fired when a frame has done navigation.

### Event: 'did-start-loading'

Corresponds to the points in time when the spinner of the tab starts
spinning.

### Event: 'did-stop-loading'

Corresponds to the points in time when the spinner of the tab stops
spinning.

### Event: 'did-get-response-details'

Returns:

-   `status` Boolean
-   `newURL` String
-   `originalURL` String
-   `httpResponseCode` Integer
-   `requestMethod` String
-   `referrer` String
-   `headers` Object

Fired when details regarding a requested resource is available. `status`
indicates socket connection to download the resource.

### Event: 'did-get-redirect-request'

Returns:

-   `oldURL` String
-   `newURL` String
-   `isMainFrame` Boolean

Fired when a redirect was received while requesting a resource.

### Event: 'dom-ready'

Fired when document in the given frame is loaded.

### Event: 'page-title-updated'

Returns:

-   `title` String
-   `explicitSet` Boolean

Fired when page title is set during navigation. `explicitSet` is false
when title is synthesized from file url.

### Event: 'page-favicon-updated'

Returns:

-   `favicons` Array - Array of URLs.

Fired when page receives favicon urls.

### Event: 'enter-html-full-screen'

Fired when page enters fullscreen triggered by HTML API.

### Event: 'leave-html-full-screen'

Fired when page leaves fullscreen triggered by HTML API.

### Event: 'console-message'

Returns:

-   `level` Integer
-   `message` String
-   `line` Integer
-   `sourceId` String

Fired when the guest window logs a console message.

The following example code forwards all log messages to the embedder's
console without regard for log level or other properties.

    webview.addEventListener('console-message', function(e) {
      console.log('Guest page logged a message:', e.message);
    });

### Event: 'found-in-page'

Returns:

-   `result` Object
    -   `requestId` Integer
    -   `finalUpdate` Boolean - Indicates if more responses are
        to follow.
    -   `activeMatchOrdinal` Integer (optional) - Position of the
        active match.
    -   `matches` Integer (optional) - Number of Matches.
    -   `selectionArea` Object (optional) - Coordinates of first
        match region.

Fired when a result is available for
[`webview.findInPage`](web-view-tag.md#webviewtagfindinpage) request.

    webview.addEventListener('found-in-page', function(e) {
      if (e.result.finalUpdate)
        webview.stopFindInPage("keepSelection");
    });

    const rquestId = webview.findInPage("test");

### Event: 'new-window'

Returns:

-   `url` String
-   `frameName` String
-   `disposition` String - Can be `default`, `foreground-tab`,
    `background-tab`, `new-window` and `other`.
-   `options` Object - The options which should be used for creating the
    new `BrowserWindow`.

Fired when the guest page attempts to open a new browser window.

The following example code opens the new url in system's default
browser.

    webview.addEventListener('new-window', function(e) {
      var protocol = require('url').parse(e.url).protocol;
      if (protocol === 'http:' || protocol === 'https:') {
        require('electron').shell.openExternal(e.url);
      }
    });

### Event: 'will-navigate'

Returns:

-   `url` String

Emitted when a user or the page wants to start navigation. It can happen
when the `window.location` object is changed or a user clicks a link in
the page.

This event will not emit when the navigation is started programmatically
with APIs like `<webview>.loadURL` and `<webview>.back`.

It is also not emitted during in-page navigation, such as clicking
anchor links or updating the `window.location.hash`. Use
`did-navigate-in-page` event for this purpose.

Calling `event.preventDefault()` does **NOT** have any effect.

### Event: 'did-navigate'

Returns:

-   `url` String

Emitted when a navigation is done.

This event is not emitted for in-page navigations, such as clicking
anchor links or updating the `window.location.hash`. Use
`did-navigate-in-page` event for this purpose.

### Event: 'did-navigate-in-page'

Returns:

-   `url` String

Emitted when an in-page navigation happened.

When in-page navigation happens, the page URL changes but does not cause
navigation outside of the page. Examples of this occurring are when
anchor links are clicked or when the DOM `hashchange` event is
triggered.

### Event: 'close'

Fired when the guest page attempts to close itself.

The following example code navigates the `webview` to `about:blank` when
the guest attempts to close itself.

    webview.addEventListener('close', function() {
      webview.src = 'about:blank';
    });

### Event: 'ipc-message'

Returns:

-   `channel` String
-   `args` Array

Fired when the guest page has sent an asynchronous message to embedder
page.

With `sendToHost` method and `ipc-message` event you can easily
communicate between guest page and embedder page:

    // In embedder page.
    webview.addEventListener('ipc-message', function(event) {
      console.log(event.channel);
      // Prints "pong"
    });
    webview.send('ping');

    // In guest page.
    var ipcRenderer = require('electron').ipcRenderer;
    ipcRenderer.on('ping', function() {
      ipcRenderer.sendToHost('pong');
    });

### Event: 'crashed'

Fired when the renderer process is crashed.

### Event: 'gpu-crashed'

Fired when the gpu process is crashed.

### Event: 'plugin-crashed'

Returns:

-   `name` String
-   `version` String

Fired when a plugin process is crashed.

### Event: 'destroyed'

Fired when the WebContents is destroyed.

### Event: 'media-started-playing'

Emitted when media starts playing.

### Event: 'media-paused'

Emitted when media is paused or done playing.

### Event: 'did-change-theme-color'

Emitted when a page's theme color changes. This is usually due to
encountering a meta tag:

    <meta name='theme-color' content='#ff0000'>

### Event: 'devtools-opened'

Emitted when DevTools is opened.

### Event: 'devtools-closed'

Emitted when DevTools is closed.

### Event: 'devtools-focused'

Emitted when DevTools is focused / opened.

The `window.open` function
==========================

When `window.open` is called to create a new window in a web page, a new
instance of `BrowserWindow` will be created for the `url` and a proxy
will be returned to `window.open` to let the page have limited control
over it.

The proxy has limited standard functionality implemented to be
compatible with traditional web pages. For full control of the new
window you should create a `BrowserWindow` directly.

The newly created `BrowserWindow` will inherit parent window's options
by default, to override inherited options you can set them in the
`features` string.

### `window.open(url[, frameName][, features])`

-   `url` String
-   `frameName` String (optional)
-   `features` String (optional)

Creates a new window and returns an instance of `BrowserWindowProxy`
class.

The `features` string follows the format of standard browser, but each
feature has to be a field of `BrowserWindow`'s options.

**Note:** Node integration will always be disabled in the opened
`window` if it is disabled on the parent window.

### `window.opener.postMessage(message, targetOrigin)`

-   `message` String
-   `targetOrigin` String

Sends a message to the parent window with the specified origin or `*`
for no origin preference.

Class: BrowserWindowProxy
-------------------------

The `BrowserWindowProxy` object is returned from `window.open` and
provides limited functionality with the child window.

### `BrowserWindowProxy.blur()`

Removes focus from the child window.

### `BrowserWindowProxy.close()`

Forcefully closes the child window without calling its unload event.

### `BrowserWindowProxy.closed`

Set to true after the child window gets closed.

### `BrowserWindowProxy.eval(code)`

-   `code` String

Evaluates the code in the child window.

### `BrowserWindowProxy.focus()`

Focuses the child window (brings the window to front).

### `BrowserWindowProxy.postMessage(message, targetOrigin)`

-   `message` String
-   `targetOrigin` String

Sends a message to the child window with the specified origin or `*` for
no origin preference.

In addition to these methods, the child window implements
`window.opener` object with no properties and a single method.

Technical Differences Between Electron and NW.js (formerly node-webkit)
=======================================================================

**Note: Electron was previously named Atom Shell.**

Like NW.js, Electron provides a platform to write desktop applications
with JavaScript and HTML and has Node integration to grant access to the
low level system from web pages.

But there are also fundamental differences between the two projects that
make Electron a completely separate product from NW.js:

**1. Entry of Application**

In NW.js the main entry point of an application is a web page. You
specify a main page URL in the `package.json` and it is opened in a
browser window as the application's main window.

In Electron, the entry point is a JavaScript script. Instead of
providing a URL directly, you manually create a browser window and load
an HTML file using the API. You also need to listen to window events to
decide when to quit the application.

Electron works more like the Node.js runtime. Electron's APIs are lower
level so you can use it for browser testing in place of
[PhantomJS](http://phantomjs.org/).

**2. Build System**

In order to avoid the complexity of building all of Chromium, Electron
uses
[`libchromiumcontent`](https://github.com/brightray/libchromiumcontent)
to access Chromium's Content API. `libchromiumcontent` is a single
shared library that includes the Chromium Content module and all of its
dependencies. Users don't need a powerful machine to build Electron.

**3. Node Integration**

In NW.js, the Node integration in web pages requires patching Chromium
to work, while in Electron we chose a different way to integrate the
libuv loop with each platform's message loop to avoid hacking Chromium.
See the
[`node_bindings`](https://github.com/electron/electron/tree/master/atom/common)
code for how that was done.

**4. Multi-context**

If you are an experienced NW.js user, you should be familiar with the
concept of Node context and web context. These concepts were invented
because of how NW.js was implemented.

By using the
[multi-context](http://strongloop.com/strongblog/whats-new-node-js-v0-12-multiple-context-execution/)
feature of Node, Electron doesn't introduce a new JavaScript context in
web pages.

Build Instructions (Linux)
==========================

Follow the guidelines below for building Electron on Linux.

Prerequisites
-------------

-   Python 2.7.x. Some distributions like CentOS still use Python 2.6.x
    so you may need to check your Python version with `python -V`.
-   Node.js v0.12.x. There are various ways to install Node. You can
    download source code from [Node.js](http://nodejs.org) and compile
    from source. Doing so permits installing Node on your own home
    directory as a standard user. Or try repositories such as
    [NodeSource](https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories).
-   Clang 3.4 or later.
-   Development headers of GTK+ and libnotify.

On Ubuntu, install the following libraries:

    $ sudo apt-get install build-essential clang libdbus-1-dev libgtk2.0-dev \
                           libnotify-dev libgnome-keyring-dev libgconf2-dev \
                           libasound2-dev libcap-dev libcups2-dev libxtst-dev \
                           libxss1 libnss3-dev gcc-multilib g++-multilib curl

On Fedora, install the following libraries:

    $ sudo yum install clang dbus-devel gtk2-devel libnotify-devel libgnome-keyring-devel \
                       xorg-x11-server-utils libcap-devel cups-devel libXtst-devel \
                       alsa-lib-devel libXrandr-devel GConf2-devel nss-devel

Other distributions may offer similar packages for installation via
package managers such as pacman. Or one can compile from source code.

If You Use Virtual Machines For Building
----------------------------------------

If you plan to build Electron on a virtual machine you will need a
fixed-size device container of at least 25 gigabytes in size.

Getting the Code
----------------

    $ git clone https://github.com/electron/electron.git

Bootstrapping
-------------

The bootstrap script will download all necessary build dependencies and
create the build project files. You must have Python 2.7.x for the
script to succeed. Downloading certain files can take a long time.
Notice that we are using `ninja` to build Electron so there is no
`Makefile` generated.

    $ cd electron
    $ ./script/bootstrap.py -v

### Cross compilation

If you want to build for an `arm` target you should also install the
following dependencies:

    $ sudo apt-get install libc6-dev-armhf-cross linux-libc-dev-armhf-cross \
                           g++-arm-linux-gnueabihf

And to cross compile for `arm` or `ia32` targets, you should pass the
`--target_arch` parameter to the `bootstrap.py` script:

    $ ./script/bootstrap.py -v --target_arch=arm

Building
--------

If you would like to build both `Release` and `Debug` targets:

    $ ./script/build.py

This script will cause a very large Electron executable to be placed in
the directory `out/R`. The file size is in excess of 1.3 gigabytes. This
happens because the Release target binary contains debugging symbols. To
reduce the file size, run the `create-dist.py` script:

    $ ./script/create-dist.py

This will put a working distribution with much smaller file sizes in the
`dist` directory. After running the create-dist.py script, you may want
to remove the 1.3+ gigabyte binary which is still in `out/R`.

You can also build the `Debug` target only:

    $ ./script/build.py -c D

After building is done, you can find the `electron` debug binary under
`out/D`.

Cleaning
--------

To clean the build files:

    $ ./script/clean.py

Troubleshooting
---------------

Make sure you have installed all of the build dependencies.

### Error While Loading Shared Libraries: libtinfo.so.5

Prebulit `clang` will try to link to `libtinfo.so.5`. Depending on the
host architecture, symlink to appropriate `libncurses`:

    $ sudo ln -s /usr/lib/libncurses.so.5 /usr/lib/libtinfo.so.5

Tests
-----

Test your changes conform to the project coding style using:

    $ ./script/cpplint.py

Test functionality using:

    $ ./script/test.py

Build Instructions (OS X)
=========================

Follow the guidelines below for building Electron on OS X.

Prerequisites
-------------

-   OS X &gt;= 10.8
-   [Xcode](https://developer.apple.com/technologies/tools/) &gt;= 5.1
-   [node.js](http://nodejs.org) (external)

If you are using the Python downloaded by Homebrew, you also need to
install following python modules:

-   pyobjc

Getting the Code
----------------

    $ git clone https://github.com/electron/electron.git

Bootstrapping
-------------

The bootstrap script will download all necessary build dependencies and
create the build project files. Notice that we're using
[ninja](https://ninja-build.org/) to build Electron so there is no Xcode
project generated.

    $ cd electron
    $ ./script/bootstrap.py -v

Building
--------

Build both `Release` and `Debug` targets:

    $ ./script/build.py

You can also only build the `Debug` target:

    $ ./script/build.py -c D

After building is done, you can find `Electron.app` under `out/D`.

32bit Support
-------------

Electron can only be built for a 64bit target on OS X and there is no
plan to support 32bit OS X in future.

Tests
-----

Test your changes conform to the project coding style using:

    $ ./script/cpplint.py

Test functionality using:

    $ ./script/test.py

Build Instructions (Windows)
============================

Follow the guidelines below for building Electron on Windows.

Prerequisites
-------------

-   Windows 7 / Server 2008 R2 or higher
-   Visual Studio 2013 with Update 4 - [download VS 2013 Community
    Edition for
    free](https://www.visualstudio.com/news/vs2013-community-vs).
-   [Python 2.7](http://www.python.org/download/releases/2.7/)
-   [Node.js](http://nodejs.org/download/)
-   [Git](http://git-scm.com)

If you don't currently have a Windows installation,
[modern.ie](https://www.modern.ie/en-us/virtualization-tools#downloads)
has timebombed versions of Windows that you can use to build Electron.

Building Electron is done entirely with command-line scripts and cannot
be done with Visual Studio. You can develop Electron with any editor but
support for building with Visual Studio will come in the future.

**Note:** Even though Visual Studio is not used for building, it's still
**required** because we need the build toolchains it provides.

**Note:** Visual Studio 2015 will not work. Please make sure to get MSVS
**2013**.

Getting the Code
----------------

    $ git clone https://github.com/electron/electron.git

Bootstrapping
-------------

The bootstrap script will download all necessary build dependencies and
create the build project files. Notice that we're using `ninja` to build
Electron so there is no Visual Studio project generated.

    $ cd electron
    $ python script\bootstrap.py -v

Building
--------

Build both Release and Debug targets:

    $ python script\build.py

You can also only build the Debug target:

    $ python script\build.py -c D

After building is done, you can find `electron.exe` under `out\D` (debug
target) or under `out\R` (release target).

64bit Build
-----------

To build for the 64bit target, you need to pass `--target_arch=x64` when
running the bootstrap script:

    $ python script\bootstrap.py -v --target_arch=x64

The other building steps are exactly the same.

Tests
-----

Test your changes conform to the project coding style using:

    $ python script\cpplint.py

Test functionality using:

    $ python script\test.py

Tests that include native modules (e.g. `runas`) can't be executed with
the debug build (see
[\#2558](https://github.com/electron/electron/issues/2558) for details),
but they will work with the release build.

To run the tests with the release build use:

    $ python script\test.py -R

Troubleshooting
---------------

### Command xxxx not found

If you encountered an error like `Command xxxx not found`, you may try
to use the `VS2012 Command Prompt` console to execute the build scripts.

### Fatal internal compiler error: C1001

Make sure you have the latest Visual Studio update installed.

### Assertion failed: ((handle))-&gt;activecnt &gt;= 0

If building under Cygwin, you may see `bootstrap.py` failed with
following error:

    Assertion failed: ((handle))->activecnt >= 0, file src\win\pipe.c, line 1430

    Traceback (most recent call last):
      File "script/bootstrap.py", line 87, in <module>
        sys.exit(main())
      File "script/bootstrap.py", line 22, in main
        update_node_modules('.')
      File "script/bootstrap.py", line 56, in update_node_modules
        execute([NPM, 'install'])
      File "/home/zcbenz/codes/raven/script/lib/util.py", line 118, in execute
        raise e
    subprocess.CalledProcessError: Command '['npm.cmd', 'install']' returned non-zero exit status 3

This is caused by a bug when using Cygwin Python and Win32 Node
together. The solution is to use the Win32 Python to execute the
bootstrap script (assuming you have installed Python under
`C:\Python27`):

    $ /cygdrive/c/Python27/python.exe script/bootstrap.py

### LNK1181: cannot open input file 'kernel32.lib'

Try reinstalling 32bit Node.js.

### Error: ENOENT, stat 'C:\\Users\\USERNAME\\AppData\\Roaming\\npm'

Simply making that directory [should fix the
problem](http://stackoverflow.com/a/25095327/102704):

    $ mkdir ~\AppData\Roaming\npm

### node-gyp is not recognized as an internal or external command

You may get this error if you are using Git Bash for building, you
should use PowerShell or VS2012 Command Prompt instead.

Build System Overview
=====================

Electron uses [gyp](https://gyp.gsrc.io/) for project generation and
[ninja](https://ninja-build.org/) for building. Project configurations
can be found in the `.gyp` and `.gypi` files.

Gyp Files
---------

Following `gyp` files contain the main rules for building Electron:

-   `atom.gyp` defines how Electron itself is built.
-   `common.gypi` adjusts the build configurations of Node to make it
    build together with Chromium.
-   `vendor/brightray/brightray.gyp` defines how `brightray` is built
    and includes the default configurations for linking with Chromium.
-   `vendor/brightray/brightray.gypi` includes general build
    configurations about building.

Component Build
---------------

Since Chromium is quite a large project, the final linking stage can
take quite a few minutes, which makes it hard for development. In order
to solve this, Chromium introduced the "component build", which builds
each component as a separate shared library, making linking very quick
but sacrificing file size and performance.

In Electron we took a very similar approach: for `Debug` builds, the
binary will be linked to a shared library version of Chromium's
components to achieve fast linking time; for `Release` builds, the
binary will be linked to the static library versions, so we can have the
best possible binary size and performance.

Minimal Bootstrapping
---------------------

All of Chromium's prebuilt binaries (`libchromiumcontent`) are
downloaded when running the bootstrap script. By default both static
libraries and shared libraries will be downloaded and the final size
should be between 800MB and 2GB depending on the platform.

By default, `libchromiumcontent` is downloaded from Amazon Web Services.
If the `LIBCHROMIUMCONTENT_MIRROR` environment variable is set, the
bootstrap script will download from it.
[`libchromiumcontent-qiniu-mirror`](https://github.com/hokein/libchromiumcontent-qiniu-mirror)
is a mirror for `libchromiumcontent`. If you have trouble in accessing
AWS, you can switch the download address to it via
`export LIBCHROMIUMCONTENT_MIRROR=http://7xk3d2.dl1.z0.glb.clouddn.com/`

If you only want to build Electron quickly for testing or development,
you can download just the shared library versions by passing the `--dev`
parameter:

    $ ./script/bootstrap.py --dev
    $ ./script/build.py -c D

Two-Phase Project Generation
----------------------------

Electron links with different sets of libraries in `Release` and `Debug`
builds. `gyp`, however, doesn't support configuring different link
settings for different configurations.

To work around this Electron uses a `gyp` variable
`libchromiumcontent_component` to control which link settings to use and
only generates one target when running `gyp`.

Target Names
------------

Unlike most projects that use `Release` and `Debug` as target names,
Electron uses `R` and `D` instead. This is because `gyp` randomly
crashes if there is only one `Release` or `Debug` build configuration
defined, and Electron only has to generate one target at a time as
stated above.

This only affects developers, if you are just building Electron for
rebranding you are not affected.

Coding Style
============

These are the style guidelines for coding in Electron.

You can run `npm run lint` to show any style issues detected by
`cpplint` and `eslint`.

C++ and Python
--------------

For C++ and Python, we follow Chromium's [Coding
Style](http://www.chromium.org/developers/coding-style). There is also a
script `script/cpplint.py` to check whether all files conform.

The Python version we are using now is Python 2.7.

The C++ code uses a lot of Chromium's abstractions and types, so it's
recommended to get acquainted with them. A good place to start is
Chromium's [Important Abstractions and Data
Structures](https://www.chromium.org/developers/coding-style/important-abstractions-and-data-structures)
document. The document mentions some special types, scoped types (that
automatically release their memory when going out of scope), logging
mechanisms etc.

JavaScript
----------

-   Write [standard](http://npm.im/standard) JavaScript style.
-   Files should **NOT** end with new line, because we want to match
    Google's styles.
-   File names should be concatenated with `-` instead of `_`, e.g.
    `file-name.js` rather than `file_name.js`, because in
    [github/atom](https://github.com/github/atom) module names are
    usually in the `module-name` form. This rule only applies to
    `.js` files.
-   Use newer ES6/ES2015 syntax where appropriate
    -   [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
        for requires and other constants
    -   [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
        for defining variables
    -   [Arrow
        functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
        instead of `function () { }`
    -   [Template
        literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
        instead of string concatenation using `+`

API Names
---------

When creating a new API, we should prefer getters and setters instead of
jQuery's one-function style. For example, `.getText()` and
`.setText(text)` are preferred to `.text([text])`. There is a
[discussion](https://github.com/electron/electron/issues/46) on this.

Setting Up Symbol Server in Debugger
====================================

Debug symbols allow you to have better debugging sessions. They have
information about the functions contained in executables and dynamic
libraries and provide you with information to get clean call stacks. A
Symbol Server allows the debugger to load the correct symbols, binaries
and sources automatically without forcing users to download large
debugging files. The server functions like [Microsoft's symbol
server](http://support.microsoft.com/kb/311503) so the documentation
there can be useful.

Note that because released Electron builds are heavily optimized,
debugging is not always easy. The debugger will not be able to show you
the content of all variables and the execution path can seem strange
because of inlining, tail calls, and other compiler optimizations. The
only workaround is to build an unoptimized local build.

The official symbol server URL for Electron is
http://54.249.141.255:8086/atom-shell/symbols. You cannot visit this URL
directly, you must add it to the symbol path of your debugging tool. In
the examples below, a local cache directory is used to avoid repeatedly
fetching the PDB from the server. Replace `c:\code\symbols` with an
appropriate cache directory on your machine.

Using the Symbol Server in Windbg
---------------------------------

The Windbg symbol path is configured with a string value delimited with
asterisk characters. To use only the Electron symbol server, add the
following entry to your symbol path (**Note:** you can replace
`c:\code\symbols` with any writable directory on your computer, if you'd
prefer a different location for downloaded symbols):

    SRV*c:\code\symbols\*http://54.249.141.255:8086/atom-shell/symbols

Set this string as `_NT_SYMBOL_PATH` in the environment, using the
Windbg menus, or by typing the `.sympath` command. If you would like to
get symbols from Microsoft's symbol server as well, you should list that
first:

    SRV*c:\code\symbols\*http://msdl.microsoft.com/download/symbols;SRV*c:\code\symbols\*http://54.249.141.255:8086/atom-shell/symbols

Using the symbol server in Visual Studio
----------------------------------------

&lt;img
src='http://mdn.mozillademos.org/files/733/symbol-server-vc8express-menu.jpg'&gt;
&lt;img
src='http://mdn.mozillademos.org/files/2497/2005\_options.gif'&gt;

Troubleshooting: Symbols will not load
--------------------------------------

Type the following commands in Windbg to print why symbols are not
loading:

    > !sym noisy
    > .reload /f chromiumcontent.dll

Source Code Directory Structure
===============================

The source code of Electron is separated into a few parts, mostly
following Chromium on the separation conventions.

You may need to become familiar with [Chromium's multi-process
architecture](http://dev.chromium.org/developers/design-documents/multi-process-architecture)
to understand the source code better.

Structure of Source Code
------------------------

    Electron
    ├── atom - C++ source code.
    |   ├── app - System entry code.
    |   ├── browser - The frontend including the main window, UI, and all of the
    |   |   main process things. This talks to the renderer to manage web pages.
    |   |   ├── ui - Implementation of UI stuff for different platforms.
    |   |   |   ├── cocoa - Cocoa specific source code.
    |   |   |   ├── gtk - GTK+ specific source code.
    |   |   |   └── win - Windows GUI specific source code.
    |   |   ├── api - The implementation of the main process APIs.
    |   |   ├── net - Network related code.
    |   |   ├── mac - Mac specific Objective-C source code.
    |   |   └── resources - Icons, platform-dependent files, etc.
    |   ├── renderer - Code that runs in renderer process.
    |   |   └── api - The implementation of renderer process APIs.
    |   └── common - Code that used by both the main and renderer processes,
    |       including some utility functions and code to integrate node's message
    |       loop into Chromium's message loop.
    |       └── api - The implementation of common APIs, and foundations of
    |           Electron's built-in modules.
    ├── chromium_src - Source code that copied from Chromium.
    ├── default_app - The default page to show when Electron is started without
    |   providing an app.
    ├── docs - Documentations.
    ├── lib  - JavaScript source code.
    |   ├── browser - Javascript main process initialization code.
    |   |   └── api - Javascript API implementation.
    |   ├── common - JavaScript used by both the main and renderer processes
    |   |   └── api - Javascript API implementation.
    |   └── renderer - Javascript renderer process initialization code.
    |       └── api - Javascript API implementation.
    ├── spec - Automatic tests.
    ├── atom.gyp - Building rules of Electron.
    └── common.gypi - Compiler specific settings and building rules for other
        components like `node` and `breakpad`.

Structure of Other Directories
------------------------------

-   **script** - Scripts used for development purpose like building,
    packaging, testing, etc.
-   **tools** - Helper scripts used by gyp files, unlike `script`,
    scripts put here should never be invoked by users directly.
-   **vendor** - Source code of third party dependencies, we didn't use
    `third_party` as name because it would confuse it with the same
    directory in Chromium's source code tree.
-   **node\_modules** - Third party node modules used for building.
-   **out** - Temporary output directory of `ninja`.
-   **dist** - Temporary directory created by `script/create-dist.py`
    script when creating a distribution.
-   **external\_binaries** - Downloaded binaries of third-party
    frameworks which do not support building with `gyp`.

Electron FAQ
============

When will Electron upgrade to latest Chrome?
--------------------------------------------

The Chrome version of Electron is usually bumped within one or two weeks
after a new stable Chrome version gets released.

Also we only use stable channel of Chrome. If an important fix is in
beta or dev channel, we will back-port it.

When will Electron upgrade to latest Node.js?
---------------------------------------------

When a new version of Node.js gets released, we usually wait for about a
month before upgrading the one in Electron. So we can avoid getting
affected by bugs introduced in new Node.js versions, which happens very
often.

New features of Node.js are usually brought by V8 upgrades, since
Electron is using the V8 shipped by Chrome browser, the shiny new
JavaScript feature of a new Node.js version is usually already in
Electron.

How to share data between web pages?
------------------------------------

To share data between web pages (the renderer processes) the simplest
way is to use HTML5 APIs which are already available in browsers. Good
candidates are [Storage
API](https://developer.mozilla.org/en-US/docs/Web/API/Storage),
[`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage),
[`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage),
and
[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

Or you can use the IPC system, which is specific to Electron, to store
objects in the main process as a global variable, and then to access
them from the renderers through the `remote` module:

    // In the main process.
    global.sharedObject = {
      someProperty: 'default value'
    };

    // In page 1.
    require('remote').getGlobal('sharedObject').someProperty = 'new value';

    // In page 2.
    console.log(require('remote').getGlobal('sharedObject').someProperty);

My app's window/tray disappeared after a few minutes.
-----------------------------------------------------

This happens when the variable which is used to store the window/tray
gets garbage collected.

If you encounter this problem, the following articles may prove helpful:

-   [Memory
    Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
-   [Variable
    Scope](https://msdn.microsoft.com/library/bzt2dkta(v=vs.94).aspx)

If you want a quick fix, you can make the variables global by changing
your code from this:

    app.on('ready', function() {
      var tray = new Tray('/path/to/icon.png');
    })

to this:

    var tray = null;
    app.on('ready', function() {
      tray = new Tray('/path/to/icon.png');
    })

I can not use jQuery/RequireJS/Meteor/AngularJS in Electron.
------------------------------------------------------------

Due to the Node.js integration of Electron, there are some extra symbols
inserted into the DOM like `module`, `exports`, `require`. This causes
problems for some libraries since they want to insert the symbols with
the same names.

To solve this, you can turn off node integration in Electron:

    // In the main process.
    var mainWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: false
      }
    });

But if you want to keep the abilities of using Node.js and Electron
APIs, you have to rename the symbols in the page before including other
libraries:

    <head>
    <script>
    window.nodeRequire = require;
    delete window.require;
    delete window.exports;
    delete window.module;
    </script>
    <script type="text/javascript" src="jquery.js"></script>
    </head>

`require('electron').xxx` is undefined.
---------------------------------------

When using Electron's built-in module you might encounter an error like
this:

    > require('electron').webFrame.setZoomFactor(1.0);
    Uncaught TypeError: Cannot read property 'setZoomLevel' of undefined

This is because you have the [npm `electron`
module](https://www.npmjs.com/package/electron) installed either locally
or globally, which overrides Electron's built-in module.

To verify whether you are using the correct built-in module, you can
print the path of the `electron` module:

    console.log(require.resolve('electron'));

and then check if it is in the following form:

    "/path/to/Electron.app/Contents/Resources/atom.asar/renderer/api/lib/exports/electron.js"

If it is something like `node_modules/electron/index.js`, then you have
to either remove the npm `electron` module, or rename it.

    npm uninstall electron
    npm uninstall -g electron

However if your are using the built-in module but still getting this
error, it is very likely you are using the module in the wrong process.
For example `electron.app` can only be used in the main process, while
`electron.webFrame` is only available in renderer processes.

Application Distribution
========================

To distribute your app with Electron, the folder containing your app
should be named `app` and placed under Electron's resources directory
(on OS X it is `Electron.app/Contents/Resources/` and on Linux and
Windows it is `resources/`), like this:

On OS X:

    electron/Electron.app/Contents/Resources/app/
    ├── package.json
    ├── index.js
    └── index.html

On Windows and Linux:

    electron/resources/app
    ├── package.json
    ├── index.js
    └── index.html

Then execute `Electron.app` (or `electron` on Linux, `electron.exe` on
Windows), and Electron will start as your app. The `electron` directory
will then be your distribution to deliver to final users.

Packaging Your App into a File
------------------------------

Apart from shipping your app by copying all of its source files, you can
also package your app into an [asar](https://github.com/atom/asar)
archive to avoid exposing your app's source code to users.

To use an `asar` archive to replace the `app` folder, you need to rename
the archive to `app.asar`, and put it under Electron's resources
directory like below, and Electron will then try to read the archive and
start from it.

On OS X:

    electron/Electron.app/Contents/Resources/
    └── app.asar

On Windows and Linux:

    electron/resources/
    └── app.asar

More details can be found in [Application
packaging](application-packaging.md).

Rebranding with Downloaded Binaries
-----------------------------------

After bundling your app into Electron, you will want to rebrand Electron
before distributing it to users.

### Windows

You can rename `electron.exe` to any name you like, and edit its icon
and other information with tools like
[rcedit](https://github.com/atom/rcedit).

### OS X

You can rename `Electron.app` to any name you want, and you also have to
rename the `CFBundleDisplayName`, `CFBundleIdentifier` and
`CFBundleName` fields in following files:

-   `Electron.app/Contents/Info.plist`
-   `Electron.app/Contents/Frameworks/Electron Helper.app/Contents/Info.plist`

You can also rename the helper app to avoid showing `Electron Helper` in
the Activity Monitor, but make sure you have renamed the helper app's
executable file's name.

The structure of a renamed app would be like:

    MyApp.app/Contents
    ├── Info.plist
    ├── MacOS/
    │   └── MyApp
    └── Frameworks/
        ├── MyApp Helper EH.app
        |   ├── Info.plist
        |   └── MacOS/
        |       └── MyApp Helper EH
        ├── MyApp Helper NP.app
        |   ├── Info.plist
        |   └── MacOS/
        |       └── MyApp Helper NP
        └── MyApp Helper.app
            ├── Info.plist
            └── MacOS/
                └── MyApp Helper

### Linux

You can rename the `electron` executable to any name you like.

Rebranding by Rebuilding Electron from Source
---------------------------------------------

It is also possible to rebrand Electron by changing the product name and
building it from source. To do this you need to modify the `atom.gyp`
file and have a clean rebuild.

### grunt-build-atom-shell

Manually checking out Electron's code and rebuilding could be
complicated, so a Grunt task has been created that will handle this
automatically:
[grunt-build-atom-shell](https://github.com/paulcbetts/grunt-build-atom-shell).

This task will automatically handle editing the `.gyp` file, building
from source, then rebuilding your app's native Node modules to match the
new executable name.

Packaging Tools
---------------

Apart from packaging your app manually, you can also choose to use third
party packaging tools to do the work for you:

-   [electron-packager](https://github.com/maxogden/electron-packager)
-   [electron-builder](https://github.com/loopline-systems/electron-builder)

Application Packaging
=====================

To mitigate [issues](https://github.com/joyent/node/issues/6960) around
long path names on Windows, slightly speed up `require` and conceal your
source code from cursory inspection, you can choose to package your app
into an [asar](https://github.com/atom/asar) archive with little changes
to your source code.

Generating `asar` Archive
-------------------------

An [asar](https://github.com/atom/asar) archive is a simple tar-like
format that concatenates files into a single file. Electron can read
arbitrary files from it without unpacking the whole file.

Steps to package your app into an `asar` archive:

### 1. Install the asar Utility

    $ npm install -g asar

### 2. Package with `asar pack`

    $ asar pack your-app app.asar

Using `asar` Archives
---------------------

In Electron there are two sets of APIs: Node APIs provided by Node.js
and Web APIs provided by Chromium. Both APIs support reading files from
`asar` archives.

### Node API

With special patches in Electron, Node APIs like `fs.readFile` and
`require` treat `asar` archives as virtual directories, and the files in
it as normal files in the filesystem.

For example, suppose we have an `example.asar` archive under `/path/to`:

    $ asar list /path/to/example.asar
    /app.js
    /file.txt
    /dir/module.js
    /static/index.html
    /static/main.css
    /static/jquery.min.js

Read a file in the `asar` archive:

    const fs = require('fs');
    fs.readFileSync('/path/to/example.asar/file.txt');

List all files under the root of the archive:

    const fs = require('fs');
    fs.readdirSync('/path/to/example.asar');

Use a module from the archive:

    require('/path/to/example.asar/dir/module.js');

You can also display a web page in an `asar` archive with
`BrowserWindow`:

    const BrowserWindow = require('electron').BrowserWindow;
    var win = new BrowserWindow({width: 800, height: 600});
    win.loadURL('file:///path/to/example.asar/static/index.html');

### Web API

In a web page, files in an archive can be requested with the `file:`
protocol. Like the Node API, `asar` archives are treated as directories.

For example, to get a file with `$.get`:

    <script>
    var $ = require('./jquery.min.js');
    $.get('file:///path/to/example.asar/file.txt', function(data) {
      console.log(data);
    });
    </script>

### Treating an `asar` Archive as a Normal File

For some cases like verifying the `asar` archive's checksum, we need to
read the content of `asar` archive as file. For this purpose you can use
the built-in `original-fs` module which provides original `fs` APIs
without `asar` support:

    var originalFs = require('original-fs');
    originalFs.readFileSync('/path/to/example.asar');

You can also set `process.noAsar` to `true` to disable the support for
`asar` in the `fs` module:

    process.noAsar = true;
    fs.readFileSync('/path/to/example.asar');

Limitations on Node API
-----------------------

Even though we tried hard to make `asar` archives in the Node API work
like directories as much as possible, there are still limitations due to
the low-level nature of the Node API.

### Archives Are Read-only

The archives can not be modified so all Node APIs that can modify files
will not work with `asar` archives.

### Working Directory Can Not Be Set to Directories in Archive

Though `asar` archives are treated as directories, there are no actual
directories in the filesystem, so you can never set the working
directory to directories in `asar` archives. Passing them as the `cwd`
option of some APIs will also cause errors.

### Extra Unpacking on Some APIs

Most `fs` APIs can read a file or get a file's information from `asar`
archives without unpacking, but for some APIs that rely on passing the
real file path to underlying system calls, Electron will extract the
needed file into a temporary file and pass the path of the temporary
file to the APIs to make them work. This adds a little overhead for
those APIs.

APIs that requires extra unpacking are:

-   `child_process.execFile`
-   `child_process.execFileSync`
-   `fs.open`
-   `fs.openSync`
-   `process.dlopen` - Used by `require` on native modules

### Fake Stat Information of `fs.stat`

The `Stats` object returned by `fs.stat` and its friends on files in
`asar` archives is generated by guessing, because those files do not
exist on the filesystem. So you should not trust the `Stats` object
except for getting file size and checking file type.

### Executing Binaries Inside `asar` Archive

There are Node APIs that can execute binaries like `child_process.exec`,
`child_process.spawn` and `child_process.execFile`, but only `execFile`
is supported to execute binaries inside `asar` archive.

This is because `exec` and `spawn` accept `command` instead of `file` as
input, and `command`s are executed under shell. There is no reliable way
to determine whether a command uses a file in asar archive, and even if
we do, we can not be sure whether we can replace the path in command
without side effects.

Adding Unpacked Files in `asar` Archive
---------------------------------------

As stated above, some Node APIs will unpack the file to filesystem when
calling, apart from the performance issues, it could also lead to false
alerts of virus scanners.

To work around this, you can unpack some files creating archives by
using the `--unpack` option, an example of excluding shared libraries of
native modules is:

    $ asar pack app app.asar --unpack *.node

After running the command, apart from the `app.asar`, there is also an
`app.asar.unpacked` folder generated which contains the unpacked files,
you should copy it together with `app.asar` when shipping it to users.

Debugging the Main Process
==========================

The browser window DevTools can only debug the renderer process scripts
(i.e. the web pages). In order to provide a way to debug the scripts
from the main process, Electron has provided the `--debug` and
`--debug-brk` switches.

Command Line Switches
---------------------

Use the following command line switches to debug Electron's main
process:

### `--debug=[port]`

When this switch is used Electron will listen for V8 debugger protocol
messages on `port`. The default `port` is `5858`.

### `--debug-brk=[port]`

Like `--debug` but pauses the script on the first line.

Use node-inspector for Debugging
--------------------------------

**Note:** Electron doesn't currently work very well with node-inspector,
and the main process will crash if you inspect the `process` object
under node-inspector's console.

### 1. Make sure you have [node-gyp required tools](https://github.com/nodejs/node-gyp#installation) installed

### 2. Install [node-inspector](https://github.com/node-inspector/node-inspector)

    $ npm install node-inspector

### 3. Install a patched version of `node-pre-gyp`

    $ npm install git+https://git@github.com/enlight/node-pre-gyp.git#detect-electron-runtime-in-find

### 4. Recompile the `node-inspector` `v8` modules for electron (change the target to your electron version number)

    $ node_modules/.bin/node-pre-gyp --target=0.36.11 --runtime=electron --fallback-to-build --directory node_modules/v8-debug/ --dist-url=https://atom.io/download/atom-shell reinstall
    $ node_modules/.bin/node-pre-gyp --target=0.36.11 --runtime=electron --fallback-to-build --directory node_modules/v8-profiler/ --dist-url=https://atom.io/download/atom-shell reinstall

See also [How to install native
modules](using-native-node-modules.md#how-to-install-native-modules).

### 5. Enable debug mode for Electron

You can either start Electron with a debug flag like:

    $ electron --debug=5858 your/app

or, to pause your script on the first line:

    $ electron --debug-brk=5858 your/app

### 6. Start the [node-inspector](https://github.com/node-inspector/node-inspector) server using electron

    $ ELECTRON_RUN_AS_NODE=true path/to/electron.exe node_modules/node-inspector/bin/inspector.js

### 7. Load the debugger UI

Open http://127.0.0.1:8080/debug?ws=127.0.0.1:8080&port=5858 in the
Chrome browser. You may have to click pause if starting with debug-brk
to see the entry line.

DevTools Extension
==================

To make debugging easier, Electron has basic support for the [Chrome
DevTools Extension](https://developer.chrome.com/extensions/devtools).

For most DevTools extensions you can simply download the source code and
use the `BrowserWindow.addDevToolsExtension` API to load them. The
loaded extensions will be remembered so you don't need to call the API
every time when creating a window.

\*\* NOTE: React DevTools does not work, follow the issue here
https://github.com/electron/electron/issues/915 \*\*

For example, to use the [React DevTools
Extension](https://github.com/facebook/react-devtools) , first you need
to download its source code:

    $ cd /some-directory
    $ git clone --recursive https://github.com/facebook/react-devtools.git

Follow the instructions in
[`react-devtools/shells/chrome/Readme.md`](https://github.com/facebook/react-devtools/blob/master/shells/chrome/Readme.md)
to build the extension.

Then you can load the extension in Electron by opening DevTools in any
window, and running the following code in the DevTools console:

    const BrowserWindow = require('electron').remote.BrowserWindow;
    BrowserWindow.addDevToolsExtension('/some-directory/react-devtools/shells/chrome');

To unload the extension, you can call the
`BrowserWindow.removeDevToolsExtension` API with its name and it will
not load the next time you open the DevTools:

    BrowserWindow.removeDevToolsExtension('React Developer Tools');

Format of DevTools Extension
----------------------------

Ideally all DevTools extensions written for the Chrome browser can be
loaded by Electron, but they have to be in a plain directory. For those
packaged with `crx` extensions, there is no way for Electron to load
them unless you find a way to extract them into a directory.

Background Pages
----------------

Currently Electron doesn't support the background pages feature in
Chrome extensions, so some DevTools extensions that rely on this feature
may not work in Electron.

`chrome.*` APIs
---------------

Some Chrome extensions may use `chrome.*` APIs for features and while
there has been some effort to implement those APIs in Electron, not all
have been implemented.

Given that not all `chrome.*` APIs are implemented if the DevTools
extension is using APIs other than `chrome.devtools.*`, the extension is
very likely not to work. You can report failing extensions in the issue
tracker so that we can add support for those APIs.

Desktop Environment Integration
===============================

Different operating systems provide different features for integrating
desktop applications into their desktop environments. For example, on
Windows, applications can put shortcuts in the JumpList of task bar, and
on Mac, applications can put a custom menu in the dock menu.

This guide explains how to integrate your application into those desktop
environments with Electron APIs.

Notifications (Windows, Linux, OS X)
------------------------------------

All three operating systems provide means for applications to send
notifications to the user. Electron conveniently allows developers to
send notifications with the [HTML5 Notification
API](https://notifications.spec.whatwg.org/), using the currently
running operating system's native notification APIs to display it.

**Note:** Since this is an HTML5 API it is only available in the
renderer process.

    var myNotification = new Notification('Title', {
      body: 'Lorem Ipsum Dolor Sit Amet'
    });

    myNotification.onclick = function () {
      console.log('Notification clicked')
    }

While code and user experience across operating systems are similar,
there are fine differences.

### Windows

-   On Windows 10, notifications "just work".
-   On Windows 8.1 and Windows 8, a shortcut to your app, with a
    [Application User Model
    ID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx),
    must be installed to the Start screen. Note, however, that it does
    not need to be pinned to the Start screen.
-   On Windows 7 and below, notifications are not supported. You can
    however send "balloon notifications" using the [Tray
    API](../api/tray.md#traydisplayballoonoptions-windows).

Furthermore, the maximum length for the notification body is 250
characters, with the Windows team recommending that notifications should
be kept to 200 characters.

### Linux

Notifications are sent using `libnotify`, it can show notifications on
any desktop environment that follows [Desktop Notifications
Specification](https://developer.gnome.org/notification-spec/),
including Cinnamon, Enlightenment, Unity, GNOME, KDE.

### OS X

Notifications are straight-forward on OS X, you should however be aware
of [Apple's Human Interface guidelines regarding
notifications](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/OSXHIGuidelines/NotificationCenter.html).

Note that notifications are limited to 256 bytes in size - and will be
truncated if you exceed that limit.

Recent documents (Windows & OS X)
---------------------------------

Windows and OS X provide easy access to a list of recent documents
opened by the application via JumpList or dock menu, respectively.

**JumpList:**

![JumpList Recent
Files](http://i.msdn.microsoft.com/dynimg/IC420538.png)

**Application dock menu:**

&lt;img
src="https://cloud.githubusercontent.com/assets/639601/5069610/2aa80758-6e97-11e4-8cfb-c1a414a10774.png"
height="353" width="428" &gt;

To add a file to recent documents, you can use the
[app.addRecentDocument](../api/app.md#appaddrecentdocumentpath-os-x-windows)
API:

    app.addRecentDocument('/Users/USERNAME/Desktop/work.type');

And you can use
[app.clearRecentDocuments](../api/app.md#appclearrecentdocuments-os-x-windows)
API to empty the recent documents list:

    app.clearRecentDocuments();

### Windows Notes

In order to be able to use this feature on Windows, your application has
to be registered as a handler of the file type of the document,
otherwise the file won't appear in JumpList even after you have added
it. You can find everything on registering your application in
[Application
Registration](http://msdn.microsoft.com/en-us/library/windows/desktop/ee872121(v=vs.85).aspx).

When a user clicks a file from the JumpList, a new instance of your
application will be started with the path of the file added as a command
line argument.

### OS X Notes

When a file is requested from the recent documents menu, the `open-file`
event of `app` module will be emitted for it.

Custom Dock Menu (OS X)
-----------------------

OS X enables developers to specify a custom menu for the dock, which
usually contains some shortcuts for commonly used features of your
application:

**Dock menu of Terminal.app:**

&lt;img
src="https://cloud.githubusercontent.com/assets/639601/5069962/6032658a-6e9c-11e4-9953-aa84006bdfff.png"
height="354" width="341" &gt;

To set your custom dock menu, you can use the `app.dock.setMenu` API,
which is only available on OS X:

    const electron = require('electron');
    const app = electron.app;
    const Menu = electron.Menu;

    var dockMenu = Menu.buildFromTemplate([
      { label: 'New Window', click: function() { console.log('New Window'); } },
      { label: 'New Window with Settings', submenu: [
        { label: 'Basic' },
        { label: 'Pro'}
      ]},
      { label: 'New Command...'}
    ]);
    app.dock.setMenu(dockMenu);

User Tasks (Windows)
--------------------

On Windows you can specify custom actions in the `Tasks` category of
JumpList, as quoted from MSDN:

> Applications define tasks based on both the program's features and the
> key things a user is expected to do with them. Tasks should be
> context-free, in that the application does not need to be running for
> them to work. They should also be the statistically most common
> actions that a normal user would perform in an application, such as
> compose an email message or open the calendar in a mail program,
> create a new document in a word processor, launch an application in a
> certain mode, or launch one of its subcommands. An application should
> not clutter the menu with advanced features that standard users won't
> need or one-time actions such as registration. Do not use tasks for
> promotional items such as upgrades or special offers.
>
> It is strongly recommended that the task list be static. It should
> remain the same regardless of the state or status of the application.
> While it is possible to vary the list dynamically, you should consider
> that this could confuse the user who does not expect that portion of
> the destination list to change.

**Tasks of Internet Explorer:**

![IE](http://i.msdn.microsoft.com/dynimg/IC420539.png)

Unlike the dock menu in OS X which is a real menu, user tasks in Windows
work like application shortcuts such that when user clicks a task, a
program will be executed with specified arguments.

To set user tasks for your application, you can use
[app.setUserTasks](../api/app.md#appsetusertaskstasks-windows) API:

    app.setUserTasks([
      {
        program: process.execPath,
        arguments: '--new-window',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'New Window',
        description: 'Create a new window'
      }
    ]);

To clean your tasks list, just call `app.setUserTasks` with an empty
array:

    app.setUserTasks([]);

The user tasks will still show even after your application closes, so
the icon and program path specified for a task should exist until your
application is uninstalled.

Thumbnail Toolbars
------------------

On Windows you can add a thumbnail toolbar with specified buttons in a
taskbar layout of an application window. It provides users a way to
access to a particular window's command without restoring or activating
the window.

From MSDN, it's illustrated:

> This toolbar is simply the familiar standard toolbar common control.
> It has a maximum of seven buttons. Each button's ID, image, tooltip,
> and state are defined in a structure, which is then passed to the
> taskbar. The application can show, enable, disable, or hide buttons
> from the thumbnail toolbar as required by its current state.
>
> For example, Windows Media Player might offer standard media transport
> controls such as play, pause, mute, and stop.

**Thumbnail toolbar of Windows Media Player:**

![player](https://i-msdn.sec.s-msft.com/dynimg/IC420540.png)

You can use
[BrowserWindow.setThumbarButtons](../api/browser-window.md#winsetthumbarbuttonsbuttons-windows-7)
to set thumbnail toolbar in your application:

    const BrowserWindow = require('electron').BrowserWindow;
    const path = require('path');

    var win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.setThumbarButtons([
      {
        tooltip: "button1",
        icon: path.join(__dirname, 'button1.png'),
        click: function() { console.log("button2 clicked"); }
      },
      {
        tooltip: "button2",
        icon: path.join(__dirname, 'button2.png'),
        flags:['enabled', 'dismissonclick'],
        click: function() { console.log("button2 clicked."); }
      }
    ]);

To clean thumbnail toolbar buttons, just call
`BrowserWindow.setThumbarButtons` with an empty array:

    win.setThumbarButtons([]);

Unity Launcher Shortcuts (Linux)
--------------------------------

In Unity, you can add custom entries to its launcher via modifying the
`.desktop` file, see [Adding Shortcuts to a
Launcher](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles#Adding_shortcuts_to_a_launcher).

**Launcher shortcuts of Audacious:**

![audacious](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles?action=AttachFile&do=get&target=shortcuts.png)

Progress Bar in Taskbar (Windows, OS X, Unity)
----------------------------------------------

On Windows a taskbar button can be used to display a progress bar. This
enables a window to provide progress information to the user without the
user having to switch to the window itself.

On OS X the progress bar will be displayed as a part of the dock icon.

The Unity DE also has a similar feature that allows you to specify the
progress bar in the launcher.

**Progress bar in taskbar button:**

![Taskbar Progress
Bar](https://cloud.githubusercontent.com/assets/639601/5081682/16691fda-6f0e-11e4-9676-49b6418f1264.png)

To set the progress bar for a Window, you can use the
[BrowserWindow.setProgressBar](../api/browser-window.md#winsetprogressbarprogress)
API:

    var window = new BrowserWindow({...});
    window.setProgressBar(0.5);

Icon Overlays in Taskbar (Windows)
----------------------------------

On Windows a taskbar button can use a small overlay to display
application status, as quoted from MSDN:

> Icon overlays serve as a contextual notification of status, and are
> intended to negate the need for a separate notification area status
> icon to communicate that information to the user. For instance, the
> new mail status in Microsoft Outlook, currently shown in the
> notification area, can now be indicated through an overlay on the
> taskbar button. Again, you must decide during your development cycle
> which method is best for your application. Overlay icons are intended
> to supply important, long-standing status or notifications such as
> network status, messenger status, or new mail. The user should not be
> presented with constantly changing overlays or animations.

**Overlay on taskbar button:**

![Overlay on taskbar
button](https://i-msdn.sec.s-msft.com/dynimg/IC420441.png)

To set the overlay icon for a window, you can use the
[BrowserWindow.setOverlayIcon](../api/browser-window.md#winsetoverlayiconoverlay-description-windows-7)
API:

    var window = new BrowserWindow({...});
    window.setOverlayIcon('path/to/overlay.png', 'Description for overlay');

Represented File of Window (OS X)
---------------------------------

On OS X a window can set its represented file, so the file's icon can
show in the title bar and when users Command-Click or Control-Click on
the title a path popup will show.

You can also set the edited state of a window so that the file icon can
indicate whether the document in this window has been modified.

**Represented file popup menu:**

&lt;img
src="https://cloud.githubusercontent.com/assets/639601/5082061/670a949a-6f14-11e4-987a-9aaa04b23c1d.png"
height="232" width="663" &gt;

To set the represented file of window, you can use the
[BrowserWindow.setRepresentedFilename](../api/browser-window.md#winsetrepresentedfilenamefilename-os-x)
and
[BrowserWindow.setDocumentEdited](../api/browser-window.md#winsetdocumenteditededited-os-x)
APIs:

    var window = new BrowserWindow({...});
    window.setRepresentedFilename('/etc/passwd');
    window.setDocumentEdited(true);

Mac App Store Submission Guide
==============================

Since v0.34.0, Electron allows submitting packaged apps to the Mac App
Store (MAS). This guide provides information on: how to submit your app
and the limitations of the MAS build.

**Note:** From v0.36.0 there was a bug preventing GPU process to start
after the app being sandboxed, so it is recommended to use v0.35.x
before this bug gets fixed. You can find more about this in [issue
\#3871](https://github.com/electron/electron/issues/3871).

**Note:** Submitting an app to Mac App Store requires enrolling [Apple
Developer
Program](https://developer.apple.com/support/compare-memberships/),
which costs money.

How to Submit Your App
----------------------

The following steps introduce a simple way to submit your app to Mac App
Store. However, these steps do not ensure your app will be approved by
Apple; you still need to read Apple's [Submitting Your
App](https://developer.apple.com/library/mac/documentation/IDEs/Conceptual/AppDistributionGuide/SubmittingYourApp/SubmittingYourApp.html)
guide on how to meet the Mac App Store requirements.

### Get Certificate

To submit your app to the Mac App Store, you first must get a
certificate from Apple. You can follow these [existing
guides](https://github.com/nwjs/nw.js/wiki/Mac-App-Store-%28MAS%29-Submission-Guideline#first-steps)
on web.

### Sign Your App

After getting the certificate from Apple, you can package your app by
following [Application Distribution](application-distribution.md), and
then proceed to signing your app. This step is basically the same with
other programs, but the key is to sign every dependency of Electron one
by one.

First, you need to prepare two entitlements files.

`child.plist`:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
      <dict>
        <key>com.apple.security.app-sandbox</key>
        <true/>
        <key>com.apple.security.inherit</key>
        <true/>
      </dict>
    </plist>

`parent.plist`:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
      <dict>
        <key>com.apple.security.app-sandbox</key>
        <true/>
      </dict>
    </plist>

And then sign your app with the following script:

    #!/bin/bash

    # Name of your app.
    APP="YourApp"
    # The path of you app to sign.
    APP_PATH="/path/to/YouApp.app"
    # The path to the location you want to put the signed package.
    RESULT_PATH="~/Desktop/$APP.pkg"
    # The name of certificates you requested.
    APP_KEY="3rd Party Mac Developer Application: Company Name (APPIDENTITY)"
    INSTALLER_KEY="3rd Party Mac Developer Installer: Company Name (APPIDENTITY)"

    FRAMEWORKS_PATH="$APP_PATH/Contents/Frameworks"

    codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/Electron Framework.framework/Versions/A"
    codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/$APP Helper.app/"
    codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/$APP Helper EH.app/"
    codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/$APP Helper NP.app/"
    if [ -d "$FRAMEWORKS_PATH/Squirrel.framework/Versions/A" ]; then
      # Signing a non-MAS build.
      codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/Mantle.framework/Versions/A"
      codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/ReactiveCocoa.framework/Versions/A"
      codesign --deep -fs "$APP_KEY" --entitlements child.plist "$FRAMEWORKS_PATH/Squirrel.framework/Versions/A"
    fi
    codesign -fs "$APP_KEY" --entitlements parent.plist "$APP_PATH"

    productbuild --component "$APP_PATH" /Applications --sign "$INSTALLER_KEY" "$RESULT_PATH"

If you are new to app sandboxing under OS X, you should also read
through Apple's [Enabling App
Sandbox](https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingAppSandbox.html)
to have a basic idea, then add keys for the permissions needed by your
app to the entitlements files.

### Upload Your App and Submit for Review

After signing your app, you can use Application Loader to upload it to
iTunes Connect for processing, making sure you have [created a
record](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/CreatingiTunesConnectRecord.html)
before uploading. Then you can [submit your app for
review](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/SubmittingTheApp.html).

Limitations of MAS Build
------------------------

In order to satisfy all requirements for app sandboxing, the following
modules have been disabled in the MAS build:

-   `crashReporter`
-   `autoUpdater`

and the following behaviors have been changed:

-   Video capture may not work for some machines.
-   Certain accessibility features may not work.
-   Apps will not be aware of DNS changes.

Also, due to the usage of app sandboxing, the resources which can be
accessed by the app are strictly limited; you can read [App
Sandboxing](https://developer.apple.com/app-sandboxing/) for more
information.

Cryptographic Algorithms Used by Electron
-----------------------------------------

Depending on the country and region you are located, Mac App Store may
require documenting the cryptographic algorithms used in your app, and
even ask you to submit a copy of U.S. Encryption Registration (ERN)
approval.

Electron uses following cryptographic algorithms:

-   AES - [NIST SP
    800-38A](http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf),
    [NIST SP
    800-38D](http://csrc.nist.gov/publications/nistpubs/800-38D/SP-800-38D.pdf),
    [RFC 3394](http://www.ietf.org/rfc/rfc3394.txt)
-   HMAC - [FIPS
    198-1](http://csrc.nist.gov/publications/fips/fips198-1/FIPS-198-1_final.pdf)
-   ECDSA - ANS X9.62–2005
-   ECDH - ANS X9.63–2001
-   HKDF - [NIST SP
    800-56C](http://csrc.nist.gov/publications/nistpubs/800-56C/SP-800-56C.pdf)
-   PBKDF2 - [RFC 2898](https://tools.ietf.org/html/rfc2898)
-   RSA - [RFC 3447](http://www.ietf.org/rfc/rfc3447)
-   SHA - [FIPS
    180-4](http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf)
-   Blowfish - https://www.schneier.com/cryptography/blowfish/
-   CAST - [RFC 2144](https://tools.ietf.org/html/rfc2144), [RFC
    2612](https://tools.ietf.org/html/rfc2612)
-   DES - [FIPS
    46-3](http://csrc.nist.gov/publications/fips/fips46-3/fips46-3.pdf)
-   DH - [RFC 2631](https://tools.ietf.org/html/rfc2631)
-   DSA - [ANSI
    X9.30](http://webstore.ansi.org/RecordDetail.aspx?sku=ANSI+X9.30-1%3A1997)
-   EC - [SEC 1](http://www.secg.org/sec1-v2.pdf)
-   IDEA - "On the Design and Security of Block Ciphers" book by X. Lai
-   MD2 - [RFC 1319](http://tools.ietf.org/html/rfc1319)
-   MD4 - [RFC 6150](https://tools.ietf.org/html/rfc6150)
-   MD5 - [RFC 1321](https://tools.ietf.org/html/rfc1321)
-   MDC2 - [ISO/IEC
    10118-2](https://www.openssl.org/docs/manmaster/crypto/mdc2.html)
-   RC2 - [RFC 2268](https://tools.ietf.org/html/rfc2268)
-   RC4 - [RFC 4345](https://tools.ietf.org/html/rfc4345)
-   RC5 - http://people.csail.mit.edu/rivest/Rivest-rc5rev.pdf
-   RIPEMD - [ISO/IEC
    10118-3](http://webstore.ansi.org/RecordDetail.aspx?sku=ISO%2FIEC%2010118-3:2004)

On how to get the ERN approval, you can reference the article: [How to
legally submit an app to Apple’s App Store when it uses encryption (or
how to obtain an
ERN)](https://carouselapps.com/2015/12/15/legally-submit-app-apples-app-store-uses-encryption-obtain-ern/).

Online/Offline Event Detection
==============================

Online and offline event detection can be implemented in the renderer
process using standard HTML5 APIs, as shown in the following example.

*index.js*

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    var onlineStatusWindow;
    app.on('ready', function() {
      onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
      onlineStatusWindow.loadURL('file://' + __dirname + '/online-status.html');
    });

*online-status.html*

    <!DOCTYPE html>
    <html>
    <body>
    <script>
      var alertOnlineStatus = function() {
        window.alert(navigator.onLine ? 'online' : 'offline');
      };

      window.addEventListener('online',  alertOnlineStatus);
      window.addEventListener('offline',  alertOnlineStatus);

      alertOnlineStatus();
    </script>
    </body>
    </html>

There may be instances where you want to respond to these events in the
main process as well. The main process however does not have a
`navigator` object and thus cannot detect these events directly. Using
Electron's inter-process communication utilities, the events can be
forwarded to the main process and handled as needed, as shown in the
following example.

*index.js*

    const electron = require('electron');
    const app = electron.app;
    const ipcMain = electron.ipcMain;
    const BrowserWindow = electron.BrowserWindow;

    var onlineStatusWindow;
    app.on('ready', function() {
      onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
      onlineStatusWindow.loadURL('file://' + __dirname + '/online-status.html');
    });

    ipcMain.on('online-status-changed', function(event, status) {
      console.log(status);
    });

*online-status.html*

    <!DOCTYPE html>
    <html>
    <body>
    <script>
      const ipcRenderer = require('electron').ipcRenderer;
      var updateOnlineStatus = function() {
        ipcRenderer.send('online-status-changed', navigator.onLine ? 'online' : 'offline');
      };

      window.addEventListener('online',  updateOnlineStatus);
      window.addEventListener('offline',  updateOnlineStatus);

      updateOnlineStatus();
    </script>
    </body>
    </html>

Quick Start
===========

Electron enables you to create desktop applications with pure JavaScript
by providing a runtime with rich native (operating system) APIs. You
could see it as a variant of the Node.js runtime that is focused on
desktop applications instead of web servers.

This doesn't mean Electron is a JavaScript binding to graphical user
interface (GUI) libraries. Instead, Electron uses web pages as its GUI,
so you could also see it as a minimal Chromium browser, controlled by
JavaScript.

### Main Process

In Electron, the process that runs `package.json`'s `main` script is
called **the main process**. The script that runs in the main process
can display a GUI by creating web pages.

### Renderer Process

Since Electron uses Chromium for displaying web pages, Chromium's
multi-process architecture is also used. Each web page in Electron runs
in its own process, which is called **the renderer process**.

In normal browsers, web pages usually run in a sandboxed environment and
are not allowed access to native resources. Electron users, however,
have the power to use Node.js APIs in web pages allowing lower level
operating system interactions.

### Differences Between Main Process and Renderer Process

The main process creates web pages by creating `BrowserWindow`
instances. Each `BrowserWindow` instance runs the web page in its own
renderer process. When a `BrowserWindow` instance is destroyed, the
corresponding renderer process is also terminated.

The main process manages all web pages and their corresponding renderer
processes. Each renderer process is isolated and only cares about the
web page running in it.

In web pages, calling native GUI related APIs is not allowed because
managing native GUI resources in web pages is very dangerous and it is
easy to leak resources. If you want to perform GUI operations in a web
page, the renderer process of the web page must communicate with the
main process to request that the main process perform those operations.

In Electron, we have several ways to communicate between the main
process and renderer processes. Like
[`ipcRenderer`](../api/ipc-renderer.md) and
[`ipcMain`](../api/ipc-main.md) modules for sending messages, and the
[remote](../api/remote.md) module for RPC style communication. There is
also an FAQ entry on [how to share data between web
pages](../faq/electron-faq.md#how-to-share-data-between-web-pages).

Write your First Electron App
-----------------------------

Generally, an Electron app is structured like this:

    your-app/
    ├── package.json
    ├── index.js
    └── index.html

The format of `package.json` is exactly the same as that of Node's
modules, and the script specified by the `main` field is the startup
script of your app, which will run the main process. An example of your
`package.json` might look like this:

    {
      "name"    : "your-app",
      "version" : "0.1.0",
      "main"    : "index.js"
    }

**Note**: If the `main` field is not present in `package.json`, Electron
will attempt to load an `index.js`.

The `index.js` should create windows and handle system events, a typical
example being:

    'use strict';

    const electron = require('electron');
    const app = electron.app;  // Module to control application life.
    const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    var mainWindow = null;

    // Quit when all windows are closed.
    app.on('window-all-closed', function() {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform != 'darwin') {
        app.quit();
      }
    });

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    app.on('ready', function() {
      // Create the browser window.
      mainWindow = new BrowserWindow({width: 800, height: 600});

      // and load the index.html of the app.
      mainWindow.loadURL('file://' + __dirname + '/index.html');

      // Open the DevTools.
      mainWindow.webContents.openDevTools();

      // Emitted when the window is closed.
      mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
      });
    });

Finally the `index.html` is the web page you want to show:

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        We are using node <script>document.write(process.versions.node)</script>,
        Chrome <script>document.write(process.versions.chrome)</script>,
        and Electron <script>document.write(process.versions.electron)</script>.
      </body>
    </html>

Run your app
------------

Once you've created your initial `index.js`, `index.html`, and
`package.json` files, you'll probably want to try running your app
locally to test it and make sure it's working as expected.

### electron-prebuilt

If you've installed `electron-prebuilt` globally with `npm`, then you
will only need to run the following in your app's source directory:

    electron .

If you've installed it locally, then run:

    ./node_modules/.bin/electron .

### Manually Downloaded Electron Binary

If you downloaded Electron manually, you can also use the included
binary to execute your app directly.

#### Windows

    $ .\electron\electron.exe your-app\

#### Linux

    $ ./electron/electron your-app/

#### OS X

    $ ./Electron.app/Contents/MacOS/Electron your-app/

`Electron.app` here is part of the Electron's release package, you can
download it from [here](https://github.com/electron/electron/releases).

### Run as a distribution

After you're done writing your app, you can create a distribution by
following the [Application Distribution](./application-distribution.md)
guide and then executing the packaged app.

### Try this Example

Clone and run the code in this tutorial by using the
[`atom/electron-quick-start`](https://github.com/electron/electron-quick-start)
repository.

**Note**: Running this requires [Git](https://git-scm.com) and
[Node.js](https://nodejs.org/en/download/) (which includes
[npm](https://npmjs.org)) on your system.

    # Clone the repository
    $ git clone https://github.com/electron/electron-quick-start
    # Go into the repository
    $ cd electron-quick-start
    # Install dependencies and run the app
    $ npm install && npm start

Supported Platforms
===================

Following platforms are supported by Electron:

### OS X

Only 64bit binaries are provided for OS X, and the minimum OS X version
supported is OS X 10.9.

### Windows

Windows 7 and later are supported, older operating systems are not
supported (and do not work).

Both `x86` and `amd64` (x64) binaries are provided for Windows. Please
note, the `ARM` version of Windows is not supported for now.

### Linux

The prebuilt `ia32`(`i686`) and `x64`(`amd64`) binaries of Electron are
built on Ubuntu 12.04, the `arm` binary is built against ARM v7 with
hard-float ABI and NEON for Debian Wheezy.

Whether the prebuilt binary can run on a distribution depends on whether
the distribution includes the libraries that Electron is linked to on
the building platform, so only Ubuntu 12.04 is guaranteed to work, but
following platforms are also verified to be able to run the prebuilt
binaries of Electron:

-   Ubuntu 12.04 and later
-   Fedora 21
-   Debian 8

Testing Electron with headless CI Systems (Travis CI, Jenkins)
==============================================================

Being based on Chromium, Electron requires a display driver to function.
If Chromium can't find a display driver, Electron will simply fail to
launch - and therefore not executing any of your tests, regardless of
how you are running them. Testing Electron-based apps on Travis, Circle,
Jenkins or similar Systems requires therefore a little bit of
configuration. In essence, we need to use a virtual display driver.

Configuring the Virtual Display Server
--------------------------------------

First, install [Xvfb](https://en.wikipedia.org/wiki/Xvfb). It's a
virtual framebuffer, implementing the X11 display server protocol - it
performs all graphical operations in memory without showing any screen
output, which is exactly what we need.

Then, create a virtual xvfb screen and export an environment variable
called DISPLAY that points to it. Chromium in Electron will
automatically look for `$DISPLAY`, so no further configuration of your
app is required. This step can be automated with Paul Betts's
[xfvb-maybe](https://github.com/paulcbetts/xvfb-maybe): Prepend your
test commands with `xfvb-maybe` and the little tool will automatically
configure xfvb, if required by the current system. On Windows or Mac OS
X, it will simply do nothing.

    ## On Windows or OS X, this just invokes electron-mocha
    ## On Linux, if we are in a headless environment, this will be equivalent
    ## to xvfb-run electron-mocha ./test/*.js
    xvfb-maybe electron-mocha ./test/*.js

### Travis CI

On Travis, your `.travis.yml` should look roughly like this:

    addons:
      apt:
        packages:
          - xvfb

    install:
      - export DISPLAY=':99.0'
      - Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &

### Jenkins

For Jenkins, a [Xfvb plugin is
available](https://wiki.jenkins-ci.org/display/JENKINS/Xvfb+Plugin).

### Circle CI

Circle CI is awesome and has xvfb and `$DISPLAY` [already setup, so no
further configuration is
required](https://circleci.com/docs/environment#browsers).

### AppVeyor

AppVeyor runs on Windows, supporting Selenium, Chromium, Electron and
similar tools out of the box - no configuration is required.

Using Native Node Modules
=========================

The native Node modules are supported by Electron, but since Electron is
using a different V8 version from official Node, you have to manually
specify the location of Electron's headers when building native modules.

Native Node Module Compatibility
--------------------------------

Native modules might break when Node starts using a new version of V8.
To make sure the module you're interested in will work with Electron,
you should check if it supports the internal Node version used by
Electron. You can check what version of Node is used in Electron by
looking it up in the
[releases](https://github.com/electron/electron/releases) page or by
using `process.version` (see [Quick
Start](https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md)
for example).

Consider using [NAN](https://github.com/nodejs/nan/) for your own
modules, since it makes it easier to support multiple versions of Node.
It's also helpful for porting old modules to newer versions of Node so
they can work with Electron.

How to Install Native Modules
-----------------------------

Three ways to install native modules:

### The Easy Way

The most straightforward way to rebuild native modules is via the
[`electron-rebuild`](https://github.com/paulcbetts/electron-rebuild)
package, which handles the manual steps of downloading headers and
building native modules:

    npm install --save-dev electron-rebuild

    # Every time you run "npm install", run this
    ./node_modules/.bin/electron-rebuild

    # On Windows if you have trouble, try:
    .\node_modules\.bin\electron-rebuild.cmd

### The npm Way

You can also use `npm` to install modules. The steps are exactly the
same with Node modules, except that you need to setup some environment
variables:

    export npm_config_disturl=https://atom.io/download/atom-shell
    export npm_config_target=0.33.1
    export npm_config_arch=x64
    export npm_config_runtime=electron
    HOME=~/.electron-gyp npm install module-name

### The node-gyp Way

To build Node modules with headers of Electron, you need to tell
`node-gyp` where to download headers and which version to use:

    $ cd /path-to-module/
    $ HOME=~/.electron-gyp node-gyp rebuild --target=0.29.1 --arch=x64 --dist-url=https://atom.io/download/atom-shell

The `HOME=~/.electron-gyp` changes where to find development headers.
The `--target=0.29.1` is version of Electron. The `--dist-url=...`
specifies where to download the headers. The `--arch=x64` says the
module is built for 64bit system.

Using Selenium and WebDriver
============================

From [ChromeDriver - WebDriver for
Chrome](https://sites.google.com/a/chromium.org/chromedriver/):

> WebDriver is an open source tool for automated testing of web apps
> across many browsers. It provides capabilities for navigating to web
> pages, user input, JavaScript execution, and more. ChromeDriver is a
> standalone server which implements WebDriver's wire protocol for
> Chromium. It is being developed by members of the Chromium and
> WebDriver teams.

In order to use `chromedriver` with Electron you have to tell it where
to find Electron and make it think Electron is the Chrome browser.

Setting up with WebDriverJs
---------------------------

[WebDriverJs](https://code.google.com/p/selenium/wiki/WebDriverJs)
provides a Node package for testing with web driver, we will use it as
an example.

### 1. Start ChromeDriver

First you need to download the `chromedriver` binary, and run it:

    $ ./chromedriver
    Starting ChromeDriver (v2.10.291558) on port 9515
    Only local connections are allowed.

Remember the port number `9515`, which will be used later

### 2. Install WebDriverJS

    $ npm install selenium-webdriver

### 3. Connect to ChromeDriver

The usage of `selenium-webdriver` with Electron is basically the same
with upstream, except that you have to manually specify how to connect
chrome driver and where to find Electron's binary:

    const webdriver = require('selenium-webdriver');

    var driver = new webdriver.Builder()
      // The "9515" is the port opened by chrome driver.
      .usingServer('http://localhost:9515')
      .withCapabilities({
        chromeOptions: {
          // Here is the path to your Electron binary.
          binary: '/Path-to-Your-App.app/Contents/MacOS/Electron',
        }
      })
      .forBrowser('electron')
      .build();

    driver.get('http://www.google.com');
    driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
    driver.findElement(webdriver.By.name('btnG')).click();
    driver.wait(function() {
     return driver.getTitle().then(function(title) {
       return title === 'webdriver - Google Search';
     });
    }, 1000);

    driver.quit();

Setting up with WebdriverIO
---------------------------

[WebdriverIO](http://webdriver.io/) provides a Node package for testing
with web driver.

### 1. Start ChromeDriver

First you need to download the `chromedriver` binary, and run it:

    $ chromedriver --url-base=wd/hub --port=9515
    Starting ChromeDriver (v2.10.291558) on port 9515
    Only local connections are allowed.

Remember the port number `9515`, which will be used later

### 2. Install WebdriverIO

    $ npm install webdriverio

### 3. Connect to chrome driver

    const webdriverio = require('webdriverio');
    var options = {
        host: "localhost", // Use localhost as chrome driver server
        port: 9515,        // "9515" is the port opened by chrome driver.
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
              binary: '/Path-to-Your-App/electron', // Path to your Electron binary.
              args: [/* cli arguments */]           // Optional, perhaps 'app=' + /path/to/your/app/
            }
        }
    };

    var client = webdriverio.remote(options);

    client
        .init()
        .url('http://google.com')
        .setValue('#q', 'webdriverio')
        .click('#btnG')
        .getTitle().then(function(title) {
            console.log('Title was: ' + title);
        })
        .end();

Workflow
--------

To test your application without rebuilding Electron, simply
[place](https://github.com/electron/electron/blob/master/docs/tutorial/application-distribution.md)
your app source into Electron's resource directory.

Alternatively, pass an argument to run with your electron binary that
points to your app's folder. This eliminates the need to copy-paste your
app into Electron's resource directory.

Using Pepper Flash Plugin
=========================

Electron now supports the Pepper Flash plugin. To use the Pepper Flash
plugin in Electron, you should manually specify the location of the
Pepper Flash plugin and then enable it in your application.

Prepare a Copy of Flash Plugin
------------------------------

On OS X and Linux, the details of the Pepper Flash plugin can be found
by navigating to `chrome://plugins` in the Chrome browser. Its location
and version are useful for Electron's Pepper Flash support. You can also
copy it to another location.

Add Electron Switch
-------------------

You can directly add `--ppapi-flash-path` and `ppapi-flash-version` to
the Electron command line or by using the `app.commandLine.appendSwitch`
method before the app ready event. Also, add the `plugins` switch of
`browser-window`. For example:

    // Specify flash path.
    // On Windows, it might be /path/to/pepflashplayer.dll
    // On OS X, /path/to/PepperFlashPlayer.plugin
    // On Linux, /path/to/libpepflashplayer.so
    app.commandLine.appendSwitch('ppapi-flash-path', '/path/to/libpepflashplayer.so');

    // Specify flash version, for example, v17.0.0.169
    app.commandLine.appendSwitch('ppapi-flash-version', '17.0.0.169');

    app.on('ready', function() {
      mainWindow = new BrowserWindow({
        'width': 800,
        'height': 600,
        'web-preferences': {
          'plugins': true
        }
      });
      mainWindow.loadURL('file://' + __dirname + '/index.html');
      // Something else
    });

Enable Flash Plugin in a `<webview>` Tag
----------------------------------------

Add `plugins` attribute to `<webview>` tag.

    <webview src="http://www.adobe.com/software/flash/about/" plugins></webview>

Using Widevine CDM Plugin
=========================

In Electron you can use the Widevine CDM plugin shipped with Chrome
browser.

Getting the plugin
------------------

Electron doesn't ship with the Widevine CDM plugin for license reasons,
to get it, you need to install the official Chrome browser first, which
should match the architecture and Chrome version of the Electron build
you use.

**Note:** The major version of Chrome browser has to be the same with
the Chrome version used by Electron, otherwise the plugin will not work
even though `navigator.plugins` would show it has been loaded.

### Windows & OS X

Open `chrome://components/` in Chrome browser, find `WidevineCdm` and
make sure it is up to date, then you can find all the plugin binaries
from the
`APP_DATA/Google/Chrome/WidevineCDM/VERSION/_platform_specific/PLATFORM_ARCH/`
directory.

`APP_DATA` is system's location for storing app data, on Windows it is
`%LOCALAPPDATA%`, on OS X it is `~/Library/Application Support`.
`VERSION` is Widevine CDM plugin's version string, like `1.4.8.866`.
`PLATFORM` is `mac` or `win`. `ARCH` is `x86` or `x64`.

On Windows the required binaries are `widevinecdm.dll` and
`widevinecdmadapter.dll`, on OS X they are `libwidevinecdm.dylib` and
`widevinecdmadapter.plugin`. You can copy them to anywhere you like, but
they have to be put together.

### Linux

On Linux the plugin binaries are shipped together with Chrome browser,
you can find them under `/opt/google/chrome`, the filenames are
`libwidevinecdm.so` and `libwidevinecdmadapter.so`.

Using the plugin
----------------

After getting the plugin files, you should pass the
`widevinecdmadapter`'s path to Electron with `--widevine-cdm-path`
command line switch, and the plugin's version with
`--widevine-cdm-version` switch.

**Note:** Though only the `widevinecdmadapter` binary is passed to
Electron, the `widevinecdm` binary has to be put aside it.

The command line switches have to be passed before the `ready` event of
`app` module gets emitted, and the page that uses this plugin must have
plugin enabled.

Example code:

    // You have to pass the filename of `widevinecdmadapter` here, it is
    // * `widevinecdmadapter.plugin` on OS X,
    // * `libwidevinecdmadapter.so` on Linux,
    // * `widevinecdmadapter.dll` on Windows.
    app.commandLine.appendSwitch('widevine-cdm-path', '/path/to/widevinecdmadapter.plugin');
    // The version of plugin can be got from `chrome://plugins` page in Chrome.
    app.commandLine.appendSwitch('widevine-cdm-version', '1.4.8.866');

    var mainWindow = null;
    app.on('ready', function() {
      mainWindow = new BrowserWindow({
        webPreferences: {
          // The `plugins` have to be enabled.
          plugins: true
        }
      })
    });

Verifying the plugin
--------------------

To verify whether the plugin works, you can use following ways:

-   Open devtools and check whether `navigator.plugins` includes the
    Widevine CDM plugin.
-   Open https://shaka-player-demo.appspot.com/ and load a manifest that
    uses `Widevine`.
-   Open http://www.dash-player.com/demo/drm-test-area/, check whether
    the page says `bitdash uses Widevine in your browser`, then play
    the video.

