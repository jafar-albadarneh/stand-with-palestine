var styles = `
    .palestine {
        position: fixed;
        bottom: 12px;
        right: -108px;
        z-index: 999;
    }
    .palestine #uawidget {
        width: 300px;
        transform: rotate(-45deg);
    }
`;

var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const ishere = document.getElementById("palestine") || false;
if (ishere) {
  document.getElementById(
    "palestine"
  ).innerHTML = `<div class="palestine"><a href="https://www.standwithpalestine.dev/" target="_blank" title="United for Palestine and the people of Gaza"><img src="https://imgur.com/2SFk1zC" alt="we-stand-with-palestine" id="uawidget"></a></div>`;
}
