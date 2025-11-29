export const getJobApllicationsForJob = async (id) => {
  const  token = await window.Clerk.session.getToken();
    const res = await fetch(`https://aidf-back-end-march.onrender.com/jobApplication?jobId=${id}`, {
      method: "GET",
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    return data;
  };
  
  export const getJobApplicationById = async (id) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(`https://aidf-back-end-march.onrender.com/jobApplication/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
  
export const createJobApplication = async (
    {
        userId, 
        fullName, 
        job,
        answers,
    }
) => {

  const  token = await window.Clerk.session.getToken();
  await fetch(`https://aidf-back-end-march.onrender.com/jobApplication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        UserId: userId,
        fullName: fullName,
        job,
        answers, 
      }),
    });
  };