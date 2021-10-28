import React from "react";

const TransmissionList = () => {
  const transmissions = [
    "sexo vaginal sem camisinha;",
    "sexo oral sem camisinha;",
    "uso de seringa por mais de uma pessoa;",
    "transfusão de sangue contaminado;",
    "da mãe que vive com o HIV para seu filho, durante a gravidez, o parto e a amamentação (transmissão vertical);",
    "instrumentos que furam ou cortam não esterilizados.",
  ];

  const transmissionList = transmissions.map((transmission) => {
    return <li><p>{transmission}</p></li>;
  });

  return (
    <div className="TransmissionList">
      <h4 className="TransmissionList-Title">Transmitido:</h4>
      <ul className="TransmissionList-List">{transmissionList}</ul>
    </div>
  );
};

export default TransmissionList;