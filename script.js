const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);

const data = {
  run: ["01-01", "01-02", "01-06", "01-08", "01-09"],
  water: ["01-04", "01-05"],
  food: ["01-01", "01-03"],
  medicine: ["01-02"],
};

nlwSetup.setData(data);
nlwSetup.load();