import { useState } from "react";
import { useNavigate } from "react-router-dom";

const [hasDownloaded, setHasDownloaded] = useState(false);

  const DoDownload = () => {
 
     const apkUrl = "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk";
     
     const link = document.createElement('a');
     link.href = apkUrl;
     link.download = 's3://payskul-apk/production/payskul.apk';
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
 
     localStorage.setItem('hasDownloadedApp', 'true');
     setHasDownloaded(true);
   };

export default DoDownload;


const MakePartner = () => {
const navigate = useNavigate();

    navigate('/contact');
};

export {MakePartner};
