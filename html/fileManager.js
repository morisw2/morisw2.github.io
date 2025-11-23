// 初始化页面时加载文件列表
window.onload = function () {
    loadFileList();
};

// 添加文件到localStorage
function addFile() {
    const fileName = document.getElementById("newFileName").value.trim();
    if (fileName === "") {
        alert("文件名不能为空！");
        return;
    }

    // 检查文件是否已存在
    const existingFiles = JSON.parse(localStorage.getItem("files") || "[]");
    if (existingFiles.includes(fileName)) {
        alert("文件已存在！");
        return;
    }

    // 添加文件
    existingFiles.push(fileName);
    localStorage.setItem("files", JSON.stringify(existingFiles));

    // 清空输入框并更新文件列表
    document.getElementById("newFileName").value = "";
    loadFileList();
}

// 加载文件列表
function loadFileList() {
    const fileListElement = document.getElementById("fileList");
    fileListElement.innerHTML = ""; // 清空现有列表

    const files = JSON.parse(localStorage.getItem("files") || "[]");
    files.forEach((file) => {
        const listItem = document.createElement("li");
        listItem.textContent = file;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "删除";
        deleteButton.onclick = function () {
            deleteFile(file);
        };

        listItem.appendChild(deleteButton);
        fileListElement.appendChild(listItem);
    });
}

// 删除文件
function deleteFile(fileName) {
    const files = JSON.parse(localStorage.getItem("files") || "[]");
    const updatedFiles = files.filter((file) => file !== fileName);
    localStorage.setItem("files", JSON.stringify(updatedFiles));

    loadFileList(); // 更新文件列表
}
var gitalk = new Gitalk({
    clientID: 'Ov23li30HyFA0qhIdxfw',
    clientSecret: 'ee78bad857d36d104aa8ccfeafe061b094c68b5d',
    repo: 'truenice2.github.io',
    owner: 'truenice2',
    admin:  ['truenice2'],
    id: location.pathname,
    distractionFreeMode: false  // Facebook-like distraction
});gitalk.render('gitalk-container');