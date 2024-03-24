
const getStoredApplications = () => {
    const storedApplications = localStorage.getItem('job-applications');
    if (storedApplications) {
        return JSON.parse(storedApplications);
    }
    return [];
}

const saveJobApplication = id => {
    const storedApplications = getStoredApplications();
    const exist = storedApplications.find(jobID => {
        return jobID == id;
    })
    console.log(exist);
    if (!exist) {
        storedApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedApplications));
    }
}
export { getStoredApplications, saveJobApplication }