const ZodzioIlgis = () => {
  let zodis = "belekas";

  function ilgis(zodis) {
    return zodis.length;
  }

  return (
    <>
      <p>
        Zodis: {zodis}, Sio zodzio ilgis yra: {ilgis(zodis)} simboliai
      </p>
    </>
  );
};

export default ZodzioIlgis;
