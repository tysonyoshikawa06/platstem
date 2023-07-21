var checkedArr = [];

console.log("total number of sources: " + totalTd())
function totalTd() { // counts the number of listed resources
  let x = 0;
  $("#table-lr td").each(function() {
    x += 1;
  });
  return x;
}

// cs
checkboxHierarchy("ml");
filterItems("mll");
filterItems("ann");
filterItems("usl");
filterItems("sl");

checkboxHierarchy("sd");
filterItems("sdl");
filterItems("cw");
filterItems("ca");

checkboxHierarchy("id");
filterItems("ui");
filterItems("ux");


// math
checkboxHierarchy("alg");
filterItems("la");
filterItems("aa");

checkboxHierarchy("calc");
filterItems("i");
filterItems("mvc");
filterItems("de");

checkboxHierarchy("logic");
filterItems("st");
filterItems("mt");
filterItems("pt");


// chem
checkboxHierarchy("ochem");
filterItems("rm");
filterItems("nom");
filterItems("iso");

checkboxHierarchy("cchem");
filterItems("mm");
filterItems("qchem");

checkboxHierarchy("biochem");
filterItems("ek");
filterItems("be");
filterItems("bg");


// physics
checkboxHierarchy("qm");
filterItems("qchem2");
filterItems("se");
filterItems("qwf");

checkboxHierarchy("ap");
filterItems("sa");
filterItems("cos");


// bio
checkboxHierarchy("nsci");
filterItems("nphys");
filterItems("cns");

checkboxHierarchy("imm");
filterItems("mhc");
filterItems("hyp");
filterItems("lym");

checkboxHierarchy("biochem2");
filterItems("ek2");
filterItems("be2");
filterItems("bg2");

checkboxHierarchy("compbio")
filterItems("bioinfo");
filterItems("gea");
filterItems("phylo");



function checkboxHierarchy(key) {
  const childDiv = $("#" + key + "-sub");
  const parentCheckbox = $("#" + key + "-cb");
  const childCheckboxes = childDiv.find("." + key + "-sub");

  parentCheckbox.on("change", function() {
    childCheckboxes.prop("checked", parentCheckbox.prop("checked"));
    childCheckboxes.trigger("change"); // updates the child checkboxes' states
  });

  childDiv.on("change", function() {
    if (!childCheckboxes.prop("checked")) {
      parentCheckbox.prop("checked", false);
    }
    else {
      const allChildCheckboxesChecked = childCheckboxes.toArray().every(cb => $(cb).prop("checked"));
      parentCheckbox.prop("checked", allChildCheckboxesChecked);
    }
  });
}

function filterItems(filterClass) {
  class filter {
    constructor(filterClass) {
      this.checkboxId = "#" + filterClass + "-cb";
      this.filterClass = filterClass;
    }
  }

  var f = new filter(filterClass);
  var checkbox = $(f.checkboxId);

  checkbox.on("change", function () {
    checked = this.checked;

    if (checked) { // creates an array of filter objects that are currently on
      checkedArr.push(f); 
    }
    else if (checkedArr.includes(f)) { // removes the filter if it is already included in the array (implicitly detects
      checkedArr = checkedArr.filter((item) => item !== f);                                 // if the box was unchecked)
    }

    if (checkedArr.length == 0) { // handles the table reminder
      $("#table-reminder").fadeIn(1000);
    }
    else {
      $("#table-reminder").css("display", "none");
    }

    $("#table-lr td").each(function () { // iterates through every td element
      cell = $(this);
      classesString = cell.attr("class");
      classes = classesString.split(" "); // creates an array of classes for each td element

      inArr = false;
        
      for (let i = 0; i < checkedArr.length; i++) {
        if (checkedArr[i] && classes.includes(checkedArr[i].filterClass)) { // short circuits if checkedArr is empty
          inArr = true;
          break;
        }
      }

      if (inArr) {
        cell.fadeIn(300);
      }
      else {
        cell.css("display", "none");
      }
    });
  });
  checkbox.trigger("change"); // runs the function at every refresh to initialize features
}

$('input').on('change', function() { // handles the text for #numSources
  let x = 0;
  $("#table-lr td").each(function() {
    if ($(this).is(":visible")) {
      x += 1;
    }
  });
  $('#numSources').text("Number of Sources: " + x);
});