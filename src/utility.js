
const getSavedJobApplication = ()=>{
    const sotredApplication = localStorage.getItem('job-application');
    const items = (sotredApplication?  JSON.parse(sotredApplication) : []);
    return items;

}

const saveJobApplication = id=>{
    const sotredApplication = getSavedJobApplication();
    const exists = sotredApplication.find(Id=>Id === id);

    if (!exists) {
        sotredApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(sotredApplication));
    }
}


export {saveJobApplication, getSavedJobApplication}