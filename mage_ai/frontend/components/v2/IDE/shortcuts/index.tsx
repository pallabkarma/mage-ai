// monaco.KeyCode docs
// https://microsoft.github.io/monaco-editor/api/enums/monaco.KeyCode.html
function addKeyboardShortcut(editor, shortcuts) {
  shortcuts.forEach(shortcut => {
    editor.addAction(shortcut);
  });
}

export default function shortcuts(monaco) {
  addKeyboardShortcut(monaco.editor, []);
}

export function saveCode(monaco, onSave) {
  return {
    contextMenuGroupId: 'navigation',
    contextMenuOrder: 1.5,
    // An unique identifier of the contributed action.
    id: 'saveCode',
    // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
    keybindingContext: null,
    // An optional array of keybindings for the action.
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
    // A label of the action that will be presented to the user.
    label: 'Save',
    // A precondition for this action.
    precondition: null,
    // Method that will be executed when the action is triggered.
    // @param editor The editor instance is passed in as a convenience
    run: editor => {
      // editor.getPosition()
      onSave();
    },
  };
}

export function executeCode(monaco, runBlock) {
  return {
    contextMenuGroupId: 'navigation',
    contextMenuOrder: 1.5,
    id: 'executeCode',
    keybindingContext: null,
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
    label: 'Run selected block',
    precondition: null,
    run: () => runBlock(),
  };
}

// {
//   "-1": "DependsOnKbLayout",
//   "0": "Unknown",
//   "1": "Backspace",
//   "10": "Space",
//   "100": "Numpad2",
//   "101": "Numpad3",
//   "102": "Numpad4",
//   "103": "Numpad5",
//   "104": "Numpad6",
//   "105": "Numpad7",
//   "106": "Numpad8",
//   "107": "Numpad9",
//   "108": "NumpadMultiply",
//   "109": "NumpadAdd",
//   "11": "PageUp",
//   "110": "NUMPAD_SEPARATOR",
//   "111": "NumpadSubtract",
//   "112": "NumpadDecimal",
//   "113": "NumpadDivide",
//   "114": "KEY_IN_COMPOSITION",
//   "115": "ABNT_C1",
//   "116": "ABNT_C2",
//   "117": "AudioVolumeMute",
//   "118": "AudioVolumeUp",
//   "119": "AudioVolumeDown",
//   "12": "PageDown",
//   "120": "BrowserSearch",
//   "121": "BrowserHome",
//   "122": "BrowserBack",
//   "123": "BrowserForward",
//   "124": "MediaTrackNext",
//   "125": "MediaTrackPrevious",
//   "126": "MediaStop",
//   "127": "MediaPlayPause",
//   "128": "LaunchMediaPlayer",
//   "129": "LaunchMail",
//   "13": "End",
//   "130": "LaunchApp2",
//   "131": "Clear",
//   "132": "MAX_VALUE",
//   "14": "Home",
//   "15": "LeftArrow",
//   "16": "UpArrow",
//   "17": "RightArrow",
//   "18": "DownArrow",
//   "19": "Insert",
//   "2": "Tab",
//   "20": "Delete",
//   "21": "Digit0",
//   "22": "Digit1",
//   "23": "Digit2",
//   "24": "Digit3",
//   "25": "Digit4",
//   "26": "Digit5",
//   "27": "Digit6",
//   "28": "Digit7",
//   "29": "Digit8",
//   "3": "Enter",
//   "30": "Digit9",
//   "31": "KeyA",
//   "32": "KeyB",
//   "33": "KeyC",
//   "34": "KeyD",
//   "35": "KeyE",
//   "36": "KeyF",
//   "37": "KeyG",
//   "38": "KeyH",
//   "39": "KeyI",
//   "4": "Shift",
//   "40": "KeyJ",
//   "41": "KeyK",
//   "42": "KeyL",
//   "43": "KeyM",
//   "44": "KeyN",
//   "45": "KeyO",
//   "46": "KeyP",
//   "47": "KeyQ",
//   "48": "KeyR",
//   "49": "KeyS",
//   "5": "Ctrl",
//   "50": "KeyT",
//   "51": "KeyU",
//   "52": "KeyV",
//   "53": "KeyW",
//   "54": "KeyX",
//   "55": "KeyY",
//   "56": "KeyZ",
//   "57": "Meta",
//   "58": "ContextMenu",
//   "59": "F1",
//   "6": "Alt",
//   "60": "F2",
//   "61": "F3",
//   "62": "F4",
//   "63": "F5",
//   "64": "F6",
//   "65": "F7",
//   "66": "F8",
//   "67": "F9",
//   "68": "F10",
//   "69": "F11",
//   "7": "PauseBreak",
//   "70": "F12",
//   "71": "F13",
//   "72": "F14",
//   "73": "F15",
//   "74": "F16",
//   "75": "F17",
//   "76": "F18",
//   "77": "F19",
//   "78": "F20",
//   "79": "F21",
//   "8": "CapsLock",
//   "80": "F22",
//   "81": "F23",
//   "82": "F24",
//   "83": "NumLock",
//   "84": "ScrollLock",
//   "85": "Semicolon",
//   "86": "Equal",
//   "87": "Comma",
//   "88": "Minus",
//   "89": "Period",
//   "9": "Escape",
//   "90": "Slash",
//   "91": "Backquote",
//   "92": "BracketLeft",
//   "93": "Backslash",
//   "94": "BracketRight",
//   "95": "Quote",
//   "96": "OEM_8",
//   "97": "IntlBackslash",
//   "98": "Numpad0",
//   "99": "Numpad1",
//   "ABNT_C1": 115,
//   "ABNT_C2": 116,
//   "Alt": 6,
//   "AudioVolumeDown": 119,
//   "AudioVolumeMute": 117,
//   "AudioVolumeUp": 118,
//   "Backquote": 91,
//   "Backslash": 93,
//   "Backspace": 1,
//   "BracketLeft": 92,
//   "BracketRight": 94,
//   "BrowserBack": 122,
//   "BrowserForward": 123,
//   "BrowserHome": 121,
//   "BrowserSearch": 120,
//   "CapsLock": 8,
//   "Clear": 131,
//   "Comma": 87,
//   "ContextMenu": 58,
//   "Ctrl": 5,
//   "Delete": 20,
//   "DependsOnKbLayout": -1,
//   "Digit0": 21,
//   "Digit1": 22,
//   "Digit2": 23,
//   "Digit3": 24,
//   "Digit4": 25,
//   "Digit5": 26,
//   "Digit6": 27,
//   "Digit7": 28,
//   "Digit8": 29,
//   "Digit9": 30,
//   "DownArrow": 18,
//   "End": 13,
//   "Enter": 3,
//   "Equal": 86,
//   "Escape": 9,
//   "F1": 59,
//   "F10": 68,
//   "F11": 69,
//   "F12": 70,
//   "F13": 71,
//   "F14": 72,
//   "F15": 73,
//   "F16": 74,
//   "F17": 75,
//   "F18": 76,
//   "F19": 77,
//   "F2": 60,
//   "F20": 78,
//   "F21": 79,
//   "F22": 80,
//   "F23": 81,
//   "F24": 82,
//   "F3": 61,
//   "F4": 62,
//   "F5": 63,
//   "F6": 64,
//   "F7": 65,
//   "F8": 66,
//   "F9": 67,
//   "Home": 14,
//   "Insert": 19,
//   "IntlBackslash": 97,
//   "KEY_IN_COMPOSITION": 114,
//   "KeyA": 31,
//   "KeyB": 32,
//   "KeyC": 33,
//   "KeyD": 34,
//   "KeyE": 35,
//   "KeyF": 36,
//   "KeyG": 37,
//   "KeyH": 38,
//   "KeyI": 39,
//   "KeyJ": 40,
//   "KeyK": 41,
//   "KeyL": 42,
//   "KeyM": 43,
//   "KeyN": 44,
//   "KeyO": 45,
//   "KeyP": 46,
//   "KeyQ": 47,
//   "KeyR": 48,
//   "KeyS": 49,
//   "KeyT": 50,
//   "KeyU": 51,
//   "KeyV": 52,
//   "KeyW": 53,
//   "KeyX": 54,
//   "KeyY": 55,
//   "KeyZ": 56,
//   "LaunchApp2": 130,
//   "LaunchMail": 129,
//   "LaunchMediaPlayer": 128,
//   "LeftArrow": 15,
//   "MAX_VALUE": 132,
//   "MediaPlayPause": 127,
//   "MediaStop": 126,
//   "MediaTrackNext": 124,
//   "MediaTrackPrevious": 125,
//   "Meta": 57,
//   "Minus": 88,
//   "NUMPAD_SEPARATOR": 110,
//   "NumLock": 83,
//   "Numpad0": 98,
//   "Numpad1": 99,
//   "Numpad2": 100,
//   "Numpad3": 101,
//   "Numpad4": 102,
//   "Numpad5": 103,
//   "Numpad6": 104,
//   "Numpad7": 105,
//   "Numpad8": 106,
//   "Numpad9": 107,
//   "NumpadAdd": 109,
//   "NumpadDecimal": 112,
//   "NumpadDivide": 113,
//   "NumpadMultiply": 108,
//   "NumpadSubtract": 111,
//   "OEM_8": 96,
//   "PageDown": 12,
//   "PageUp": 11,
//   "PauseBreak": 7,
//   "Period": 89,
//   "Quote": 95,
//   "RightArrow": 17,
//   "ScrollLock": 84,
//   "Semicolon": 85,
//   "Shift": 4,
//   "Slash": 90,
//   "Space": 10,
//   "Tab": 2,
//   "Unknown": 0,
//   "UpArrow": 16
// }
