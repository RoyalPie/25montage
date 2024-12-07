const dummyApiResponse = {
  showThemeMode: true,
  showCaroChess: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeMeunu: true,
};

function contextFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured!!!");
  });
}

export default contextFlagDataServiceCall;
