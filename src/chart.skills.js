function dataTechStackProcessValue(key, value = -1) {
  if (value <= -1) {
    if (Object.keys(dataTechCatagories.Simple).includes(key)) {
      let categoryKeys = Object.keys(dataTechCatagories[key]);
      let sum = 0;
      for (let i = categoryKeys.length - 1; i >= 0; i -= 1) {
        sum += dataTechStack[categoryKeys[i]] ?? 0;
      }
      value = (sum / categoryKeys.length) || 0;
    } else {
      value = dataTechStack[key] ?? 0;
    }
  }
  return (value);
}
function dataTechStackInit () {
  for (let cat in dataTechCatagories) {
    for(let attr in dataTechCatagories[cat]) {
      dataTechCatagories[cat][attr] = dataTechStackProcessValue(attr, dataTechCatagories[cat][attr]);
    }
  }
  console.log(dataTechCatagories);
}
function chartjsTechStackUpdate(...states) {
  console.log(states);
  chart = {};
  chart.type = 'radar';
  chart.data = {};
  chart.data.datasets = [];
  chart.options = { 
    elements: {
      line: {
        borderWidth: 3
      }
    },
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  if(states.includes('Simple')) {
    chart.data.labels = Object.keys(dataTechCatagories['Simple']);
    chart.data.datasets.push({...dataTechDataset['Simple'], ...{data:Object.values(dataTechCatagories['Simple'])}});
  } else {
    chart.data.labels = Object.keys(dataTechStack);
    chart.data.datasets.push({...dataTechDataset['All'], ...{data:Object.values(dataTechStack)}});
  }

  chartjsTechStack.destroy();
  chartjsTechStack = new Chart(chartTechStack, chart);
}

function chartjsTechStackDomTrigger() {
  let inputs = { 'Simple': !document.getElementById('chartTechStackViewToggle').checked };
  for (const [key, value] of Object.entries(inputs)) {
    if (!value) {
      delete inputs[key];
    }
  }

  chartjsTechStackUpdate(...Object.keys(inputs));11
}
const chartTechStack = document.getElementById('chartTechStack');
var chartjsTechStack = new Chart(chartTechStack, {});
const dataTechStack = {
  'Wordpress': 100,
  'Drupal': 75,
  'SEO': 90,
  'Accessibility': 100,
  'Apache': 70,
  'Debian': 70,
  'Ubuntu': 90,
  'CentOS': 80,
  'Docker': 90,
  'Bash': 90,
  'Git': 70,
  'PHP': 100,
  'ASP': 50,
  'C++': 60,
  'C#': 65,
  'Java': 40,
  'Python': 75,
  'NodeJs': 85,
  'Ruby': 20,
  'MySQL': 80,
  'MongoDB': 30,
  'Go': 10,
  'Sass': 100,
  'HTML': 100,
  'CSS': 100,
  'Javascript': 95,
  'JQuery': 75,
  'ES5 JS': 100,
  'SVG': 80,
  'Bootstrap': 80,
  'PhotoShop': 70,
  'Gimp': 60,
  'Adobe Illustrator': 100,
  'Inkscape': 55,
  'Audacity': 55,
};
const dataTechDataset = {
  'All': {
    label: 'My Skills',
    data: [],
    fill: true,
    backgroundColor: 'rgba(' + getComputedStyle(chartTechStack).getPropertyValue('--bs-primary-rgb') + ', 0.1)',
    borderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-primary-border-subtle'),
    pointBackgroundColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-primary'),
    pointBorderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-primary-bg-subtle'),
  },
  'Simple': {
    label: 'Summery',
    data: [],
    fill: true,
    backgroundColor: 'rgba(' + getComputedStyle(chartTechStack).getPropertyValue('--bs-info-rgb') + ', 0.1)',
    borderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-info-border-subtle'),
    pointBackgroundColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-primary'),
    pointBorderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-secondary-bg-subtle'),
  },
  'Back End': {
    label: 'Back End',
    data: [],
    fill: true,
    backgroundColor: 'rgba(' + getComputedStyle(chartTechStack).getPropertyValue('--bs-secondary-rgb') + ', 0.1)',
    borderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-secondary-border-subtle'),
    pointBackgroundColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-secondary'),
    pointBorderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-secondary-bg-subtle'),
  },
  'Front End': {
    label: 'Front End',
    data: [],
    fill: true,
    backgroundColor: 'rgba(' + getComputedStyle(chartTechStack).getPropertyValue('--bs-success-rgb') + ', 0.1)',
    borderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-success-border-subtle'),
    pointBackgroundColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-success'),
    pointBorderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-success-bg-subtle'),
  },
  'Designer': {
    label: 'Designer',
    data: [],
    fill: true,
    backgroundColor: 'rgba(' + getComputedStyle(chartTechStack).getPropertyValue('--bs-info-rgb') + ', 0.1)',
    borderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-info-border-subtle'),
    pointBackgroundColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-info'),
    pointBorderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-info-bg-subtle'),
  },
  'Editor': {
    label: 'Editor',
    data: [],
    fill: true,
    backgroundColor: 'rgba(' + getComputedStyle(chartTechStack).getPropertyValue('--bs-warning-rgb') + ', 0.1)',
    borderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-warning-border-subtle'),
    pointBackgroundColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-warning'),
    pointBorderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-warning-bg-subtle'),
  },
  'Server Admin': {
    label: 'Server Admin',
    data: [],
    fill: false,
    backgroundColor: 'rgba(' + getComputedStyle(chartTechStack).getPropertyValue('--bs-error-rgb') + ', 0.1)',
    borderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-error-border-subtle'),
    pointBackgroundColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-error'),
    pointBorderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-error-bg-subtle'),
  },
  'Audio Engineer': {
    label: 'Audio Engineer',
    data: [],
    fill: true,
    backgroundColor: 'rgba(' + getComputedStyle(chartTechStack).getPropertyValue('--bs-dark-rgb') + ', 0.1)',
    borderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-dark-border-subtle'),
    pointBackgroundColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-dark'),
    pointBorderColor: getComputedStyle(chartTechStack).getPropertyValue('--bs-dark-bg-subtle'),
  }
};
const dataTechCatagories = {
  'Simple': {
    'Front End': -1,
    'Back End': -1,
    'Designer': -1,
    'Editor': -1,
    'Server Admin': -1,
  },
  'Front End': {
    'Sass': -1,
    'HTML': -1,
    'CSS': -1,
    'Javascript': -1,
    'JQuery': -1,
    'ES5 JS': -1,
    'SVG': -1,
    'Bootstrap': -1,
    'Git': -1,
  },
  'Back End': {
    'PHP': -1,
    'Python': -1,
    'NodeJs': -1,
    'MySQL': -1,
    'Git': -1,
  },
  'Designer': {
    'PhotoShop': -1,
    'Gimp': -1,
    'Adobe Illustrator': -1,
    'Inkscape': -1,
  },
  'Editor': {
    'Wordpress': -1,
    'Drupal': -1,
    'SEO': -1,
    'Accessibility': -1,
  },
  'Server Admin': {
    'Apache': -1,
    'Debian': -1,
    'Ubuntu': -1,
    'CentOS': -1,
    'Docker': -1,
    'Bash': -1,
  },
};
dataTechStackInit();
chartjsTechStackUpdate('Simple');