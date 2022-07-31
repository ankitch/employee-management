const userDetail = (req, res, next) => {
  //db query

  res.status(200).json({
    data: [
      {
        title: "ankit",
        company: "innovate",
      },
      {
        title: "bishal",
        company: "ing",
      },
    ],
  });
};

//delete
//update
module.exports = {
  userDetail,
};
