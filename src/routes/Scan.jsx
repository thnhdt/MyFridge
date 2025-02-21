import "../components/css/Printer.css";
import '../components/css/Hero.css';
import folder from "../assets/images/folder.png"
import upload from "../assets/images/upload.png"
import "bootstrap-icons/font/bootstrap-icons.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Not_Error from '../assets/images/Not_Error.png';
import Error from '../assets/images/Error.png'
import React, {useRef,useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Print() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const fileIconMap = {
        pdf: "bi bi-filetype-pdf",
        png: "bi bi-filetype-png",
        docx: "bi bi-filetype-docx",
        csv: "bi bi-filetype-csv",
        txt: "bi bi-filetype-txt",
    };

    const getFileIconClass = (filename) => {
        const extension = filename.split('.').pop().toLowerCase(); 
        return fileIconMap[extension] || null; 
    };

    const navigate = useNavigate(); 
    const fileInputRef = useRef();
    const [showModal, setShowModal] = useState(false);
    const [unsupportedFile, setUnsupportedFile] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const MAX_FILE_SIZE_MB = 100 * 1024 * 1024; 

    const handleChange = (event) => {
        const file = Array.from(event.target.files);
        file.forEach(file => {
            const iconClass = getFileIconClass(file.name);
            if (!iconClass) {
                setUnsupportedFile(file.name);
                setShowModal(true);
                return;
            }
            if (file.size > MAX_FILE_SIZE_MB) {
                const largeFile = {
                    id: Date.now() + Math.random(), // Ensure unique ID
                    name: getDisplayName(file.name),
                    icon: getFileIconClass(file.name),
                    progress: 0,
                    status: 'Error',
                    error: true,
                    file: file // Store the actual file
                };
                setUploadedFiles((prevFiles) => [...prevFiles, largeFile]);
                return;
            }
    
            const newFile = {
                id: Date.now() + Math.random(),
                name: getDisplayName(file.name),
                icon: getFileIconClass(file.name),
                progress: 0,
                status: 'Uploading',
                error: false,
                file: file // Store the actual file
            };
            setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
            simulateUploadProgress(newFile.id);
        });
        
        event.target.value = "";
    };
    
    const simulateUploadProgress = (fileId) => {
        const updateProgress = (progress, status) => {
            setUploadedFiles((prevFiles) =>
                prevFiles.map((file) =>
                    file.id === fileId
                        ? { ...file, progress, status }
                        : file
                )
            );
        };


        setTimeout(() => updateProgress(60, 'Uploading'), 1000);
        setTimeout(() => updateProgress(100, 'Completed'), 2000);
    };

    const getDisplayName = (name) => {
        const MAX_START_LENGTH = 15;
        const MAX_END_LENGTH = 10; 
    
        if (name.length <= MAX_START_LENGTH + MAX_END_LENGTH + 3) {
            return name;
        }
    
        const extensionIndex = name.lastIndexOf('.');
        const extension = name.substring(extensionIndex); // Extract the file extension
        const baseName = name.substring(0, extensionIndex); // Exclude the file extension
    
        const startPart = baseName.substring(0, MAX_START_LENGTH); // First 15 characters
        const endPart = baseName.substring(baseName.length - MAX_END_LENGTH); // Last 10 characters
    
        return `${startPart}...${endPart}${extension}`;
    };
    const closeModal = () => setShowModal(false);
    const handleSetupClick = () => {

        if (uploadedFiles.length > 0) {
            const completedFiles = uploadedFiles.filter(file => 
                file.status === 'Completed' && !file.error
            ).map(file => ({
                id: file.id,
                name: file.name,
                icon: file.icon,
                file: file.file  
            }));

            const filename = completedFiles.length > 0 ? completedFiles[0].name : '';
            
            if (completedFiles.length > 0) {
                navigate('/fridge2');
            }
        }
    };
    return (
        <section id="hero" className="block hero-block" style={{ margin: '40px 50px 0'}}>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div class="printer-parent container" style={{ display: 'flex', gap: '50px'}}>
            <div class="col-mb-2 printer">
                    <div class="container content-header">
                        <div class="row header">QUÉT SẢN PHẨM</div> 
                        <div class="row normal-font">Quét sản phẩm bạn muốn bỏ vào tủ lạnh</div>
                    </div> 
                    <div class ="container" style={{ display: "flex", alignItems: "center", marginLeft:"10px"}}>
                        <div class="col"> 
                        <img src={folder} alt="" style={{ marginRight: "10px" }}></img>
                            </div>
                        <div class="col normal-font"> 
                        Scan
                        </div>
                        <div class="col-9">
                        </div>
                    </div>
                    <div class="container upload-file-container content-header">
                        <div class="row">
                        <img src={upload} alt="" ></img>
                        </div>
                        <div class="row normal-font" style={{marginBottom:"10px"}}>
                        Thêm ảnh
                        </div>
                        <div class="row">

                        <button onClick={()=>fileInputRef.current.click()}>Chọn ảnh từ máy</button>
                        <input onChange={handleChange} multiple={true} ref={fileInputRef} type='file'hidden/>
                        </div>
                    </div>
            </div>
            <div class = "col">
                <div class = "header" style={{color:"black"}}>
                    Các sản phẩm
                </div>
                <div style={{ height: '55%', overflowY: 'auto', paddingRight: '10px' }}>
                {uploadedFiles.map((file) => (
                <div key={file.id} style={{ display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <i class={file.icon} style={{ fontSize: '60px' }}></i>
                    <div class="" style={{ flexGrow: 1, marginLeft: '10px', Width:'100%'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>   
                            <div class="file_name">{file.name}</div>
                            <div class={file.error ? 'Error' : 'Not_Error'}>{file.status}</div>
                        </div> 
                        <ProgressBar now={file.progress} style={{ Width:'100%'}}/>
                    </div>
                    <div>
                    <img src={file.error ? Error : Not_Error} alt=""></img>
                    </div>
                </div>
                ))}
                </div>
                {/* Đây là File 2*/}
                <div style={{display:"flex", justifyContent:"center", marginTop:"5%"}}>
                <button type="submit" class="btn btn-success" onClick={handleSetupClick}>Cho vào tủ lạnh</button>
                </div>
            </div>
            </div>
            </div>
            <Modal show={showModal} onHide={closeModal} style={{marginTop:"15%"}}> 
                <Modal.Header closeButton>
                    <Modal.Title>Unsupported File Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The file <strong>{unsupportedFile}</strong> is not supported. Please upload a valid file type.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </section>
    );
}

export default Print;