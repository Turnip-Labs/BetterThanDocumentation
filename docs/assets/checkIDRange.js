/** @type {HTMLButtonElement} */
const QUERY_BUTTON_NODE = document.querySelector("#ID_CHECK_BUTTON");

/** @type {HTMLParagraphElement} */
const QUERY_RESULT_NODE = document.querySelector("#ID_CHECK_RESULT");

/** @type {HTMLInputElement} */
const QUERY_START_NODE = document.querySelector("#ID_CHECK_START");

/** @type {HTMLInputElement} */
const QUERY_END_NODE = document.querySelector("#ID_CHECK_END");

/** @type {HTMLTableElement} */
const ID_TABLE_NODE = document.querySelector("#ID_TABLE").children[0];

/** @type {Map<string, number[]>} */
const IDTable = new Map();

for (let childIdx = 2; childIdx < ID_TABLE_NODE.children.length; childIdx++) {
    const child = ID_TABLE_NODE.children[childIdx];

    const modID = child.children[0].textContent;
    const itemStart = Number(child.children[1].textContent);
    const itemEnd = Number(child.children[2].textContent);
    const blockStart = Number(child.children[3].textContent);
    const blockEnd = Number(child.children[4].textContent);

    IDTable.set(modID + " (Items)",  [itemStart, itemEnd]);
    IDTable.set(modID + " (Blocks)", [blockStart, blockEnd]);
}

/** @param {string} text
 *  @param {boolean} failure
 */
function updateResult(text, failure) {
    QUERY_RESULT_NODE.textContent = text;
    QUERY_RESULT_NODE.style["color"] = failure ? "red" : "green";
}

QUERY_BUTTON_NODE.onclick = _ => {
    const [rangeStart, rangeEnd] = [
        Number(QUERY_START_NODE.value),
        Number(QUERY_END_NODE.value)
    ];

    if (rangeStart > rangeEnd || isNaN(rangeStart) || isNaN(rangeEnd)) {
        updateResult("INVALID RANGE", true);
        return;
    }

    let conflict = null;

    IDTable.forEach((range, modID) => {
        if (conflict) return;
        if (isNaN(range[0]) || isNaN(range[1])) return;

        const [start, end] = range;

        if (!(rangeEnd < start || end < rangeStart)) {
            conflict = modID;
        }
    });

    if (conflict) {
        updateResult("Conflicts with " + conflict, true);
    } else {
        updateResult("No conflicts", false);
    }
};

