const rootElem = document.documentElement;

function setOS(os) {
	rootElem.classList.remove("linux", "macos", "incompatible", "windows")
	switch(os) {
		case "linux":
			rootElem.classList.add("linux")
		break
		case "macos":
			rootElem.classList.add("macos")
		break
		case "windows":
			rootElem.classList.add("windows")
		break
		default:
			rootElem.classList.add("incompatible")
	}
}

function getOS() {
  const userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod']
  let os = null

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'macos'
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios'
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows'
  } else if (/Android/.test(userAgent)) {
    os = 'android'
  } else if (/Linux/.test(platform)) {
    os = 'linux'
  }
  return os
}

setOS(getOS())

document.getElementById("Linux").addEventListener('click', (e) => setOS("linux"))
document.getElementById("MacOS").addEventListener('click', (e) => setOS("macos"))
document.getElementById("Windows").addEventListener('click', (e) => setOS("windows"))

