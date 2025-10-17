const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");

para.textContent = "We enjoyed the ride";

sect.append(para);

const text = document.createTextNode(
    "- hihojkhkhkhk");

    const linkPara = document.querySelector("p");
    linkPara.append(text);


    sect.appendChild(linkPara);
    sect.removeChild(linkPara);

    linkPara.remove();


    para.style.color = "red"