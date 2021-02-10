import './App.css';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import { Modal } from 'antd';
import TableRender from './tableRender'

function App() {
    let [file, setFile] = useState(undefined);

    let [uploadingStatus, setUploadingStatus] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        if (
            (uploadingStatus && (file.some(element => element.data.['Full Name'] === ''))) ||
            (uploadingStatus && (file.some(element => element.data.['Phone'] === ''))) ||
            (uploadingStatus && (file.some(element => element.data.['Email'] === '')))
        ) {
            setIsModalVisible(true);
        }
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setUploadingStatus(uploadingStatus = false);
        setFile(undefined);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setUploadingStatus(uploadingStatus = false);
        setFile(undefined);
    };

    let handleCsvFile = (data) => {
        setFile(file = data);
        setUploadingStatus(uploadingStatus = true);
        console.log("fileCSVReader", file);
        showModal();
    };

    let handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    };

    let handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data);
        setUploadingStatus(uploadingStatus = false);
        setFile(file = undefined);
        console.log('---------------------------')
    };

    return (
        <div className="App">
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>File is incorect</p>
            </Modal>
            <CSVReader
                config={{
                    header: true,
                    skipEmptyLines: true
                }}
                onDrop={(data) => {handleCsvFile(data)}}
                onError={() => {handleOnError()}}
                addRemoveButton
                removeButtonColor='#659cef'
                onRemoveFile={() => {handleOnRemoveFile()}}
            >
                <span>Drop CSV file here or click to upload.</span>
            </CSVReader>
            {uploadingStatus ? (<TableRender file={file} />) : (null) }
        </div>
    );
}

export default App;
