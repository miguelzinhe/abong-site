import React from "react";

const NotTransmissionList = () => {
  const notTransmissions = [
    "sexo com uso correto de camisinha;",
    "masturbação a dois;",
    "beijo no rosto ou na boca;",
    "suor e lágrimas;",
    "aperto de mão ou abraço;",
    "sabonete/toalha/lençóis;",
    "talheres/copos;",
    "assento de ônibus;",
    "doação de sangue.",
  ];

  const notTransmissionList = notTransmissions.map((notTransmission) => {
    return <li><p>{notTransmission}</p></li>;
  });

  return (
    <div className="NotTransmissionList">
      <h4 className="NotTransmissionList-Title">Não é transmitido:</h4>
      <ul>{notTransmissionList}</ul>
    </div>
  );
};

export default NotTransmissionList;
