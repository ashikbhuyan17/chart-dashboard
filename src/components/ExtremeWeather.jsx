import React, { useState } from 'react';
import { Button, Modal } from 'antd';
export default function ExtremeWeather({ extremeWeatherData }) {
  console.log(
    '🚀 ~ ExtremeWeather ~ extremeWeatherData:',
    extremeWeatherData?.alerts
  );
  const isDataArray = Array.isArray(extremeWeatherData?.alerts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [extremeData, setExtremeData] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="space-y-4">
      <p className="font-bold text-gray-600">Extreme Weather Information : </p>
      {isDataArray && extremeWeatherData?.alerts.length > 0 ? (
        <>
          <div className="flex flex-wrap gap-x-2">
            {extremeWeatherData &&
              extremeWeatherData?.alerts.map((data, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-2 rounded-full cursor-pointer"
                  onClick={() => {
                    setExtremeData(data);
                    showModal();
                  }}
                >
                  <p>
                    {data?.title.length > 15
                      ? data?.title.slice(0, 25) + '...'
                      : data?.title}
                  </p>
                </div>
              ))}
          </div>

          <>
            {isModalOpen && extremeData && (
              <Modal
                // title="Extreme Single Data"
                title="Extreme Single Data"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="shadow-md p-2 space-y-3">
                  <p>
                    <span className="font-bold text-blue-950 ">Title :</span>{' '}
                    {extremeData?.title}
                  </p>
                  <p className="space-y-2">
                    <span className="font-bold text-blue-950 ">Regions :</span>{' '}
                    <div className="flex flex-wrap gap-2">
                      {extremeData &&
                        extremeData?.regions.map((data, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 p-2 rounded-full "
                          >
                            <p>{data}</p>
                          </div>
                        ))}
                    </div>
                  </p>
                  <p>
                    <span className="font-bold text-blue-950 ">
                      Description :
                    </span>{' '}
                    {extremeData?.description}
                  </p>
                </div>
              </Modal>
            )}
          </>
        </>
      ) : (
        <div className="bg-red-400 p-2 rounded-md font-bold tex text-white text-center uppercase">
          {extremeWeatherData?.alerts == undefined
            ? 'data not found'
            : extremeWeatherData?.alerts}
        </div>
      )}
    </div>
  );
}
