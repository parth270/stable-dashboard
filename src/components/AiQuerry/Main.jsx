import React from "react";
import UploadPdf from "./UploadPdf";
import FlipBook from "./Book";

// const chat_qa = async (
//   user_id,
//   file_id,
//   inputValue,
//   description,
//   setHistory,
//   history,
//   setInputValue,
//   setLoading
// ) => {
//   // create a new FormData instance
//   if (inputValue === "") {
//     alert("Please enter a question");
//     return;
//   }
//   if (file_id === "") {
//     alert("Please upload a file");
//     return;
//   }
//   setLoading(true);
//   const formData = new FormData();
//   formData.append("query", inputValue);
//   formData.append("user_id", user_id);
//   formData.append("file_id", file_id);
//   // formData.append("description", description);
//   setInputValue("");

//   // define the request options
//   const requestOptions = {
//     method: "POST",
//     body: formData,
//     redirect: "follow",
//   };

//   // send the request to the API and set the response for the current message
//   try {
//     const response = await fetch(
//       "https://b656-3-133-102-91.ngrok-free.app/chatqa_multiple",
//       requestOptions
//     );
//     const result = await response.json();

//     // Create an array of all the answers
//     const answerArray = result.map((item) => item.answer);

//     // Push a new message object to history containing the question and all corresponding answers
//     setHistory([...history, { question: inputValue, answers: answerArray }]);

//     setLoading(false);
//   } catch (error) {
//     console.log("error", error);
//     setLoading(false);
//   }
// };

// const analyze_documents = async (user_id, files, setFileid, setLoading) => {
//   // create a new FormData instance

//   const formData = new FormData();

//   // append the file to the FormData instance

//   if (files) {
//     for (let i = 0; i < files.length; i++) {
//       formData.append("file", files[i], files[i].name);
//     }
//     formData.append("user_id", user_id);
//     setLoading(true);
//   } else {
//     alert("Please select a file");
//     return;
//   }

//   // formData.append("file", file, file.name);

//   // define the request options
//   const requestOptions = {
//     method: "POST",
//     body: formData,
//     redirect: "follow",
//   };

//   try {
//     const response = await fetch(
//       "https://b656-3-133-102-91.ngrok-free.app/analyze_multiple_documents",
//       requestOptions
//     );
//     const result = await response.json();
//     // console.log(result);
//     setFileid(result.file_id);
//     setLoading(false);
//   } catch (error) {
//     console.log("error", error);
//     setLoading(false);
//   }
// };

export default function App() {
  return (
    <>
      <UploadPdf />
      <FlipBook />
    </>
  );
}
