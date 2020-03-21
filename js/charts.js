console.log('Hello, World!');

$(document).ready(main());

function main() {
  const csvStr = $.ajax({url: "dat/nst-est2019-01.csv", async: false});
  const csvArr = Papa.parse(csvStr.responseText, {header: true, skipEmptyLines: true});
  console.log(csvArr);
  DrawTable(csvArr);
};

function DrawTable(csvArr) {
  $('#dt').dataTable( {
    paging: false,
    data : csvArr.data,
    columns : [
      { title: 'State', data: 'State' },
      { title: '2010',   data: '2010' }
    ]
  } );
};
