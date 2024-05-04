import { checkForName } from "./nameChecker";

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    if (checkForName(formText)) {
        postData("/api", { formText }).then((data) => {
            console.log(data);
            document.querySelector(".agreement").innerHTML = data.agreement;
            document.querySelector(".type").innerHTML =
                data.sentimented_concept_list[0].type ?? "N/A";
            document.querySelector(".score").innerHTML =
                data.sentimented_concept_list[0].score_tag ?? "N/A";
        });
    }
}

// POST request
const postData = async (url = "", dataReq = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataReq),
    });

    try {
        const dataRes = await response.json();
        return dataRes;
    } catch (error) {
        console.log("error", error);
    }
};

export { handleSubmit };
