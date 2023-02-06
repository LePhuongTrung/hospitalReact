import React, { forwardRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";
const Donutchart = forwardRef((props, ref) => {
  const { data } = props;

  const [typeSick, setTypeSick] = useState([
    "internal",
    "surgicalDiseases",
    "obstetrics",
    "emergency",
    "Infectious",
  ]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const Sum = () => {
      var sumInternalDiseases = 0,
        sumSurgicalDiseases = 0,
        sumObstetrics = 0,
        sumEmergency = 0,
        sumInfectious = 0;
      data.forEach(myFunction);

      function myFunction(item) {
        sumInternalDiseases += item.internal;
        sumSurgicalDiseases += item.surgicalDiseases;
        sumObstetrics += item.obstetrics;
        sumEmergency += item.emergency;
        sumInfectious += item.Infectious;
      }
      setTotal([
        ...total,
        sumInternalDiseases,
        sumSurgicalDiseases,
        sumObstetrics,
        sumEmergency,
        sumInfectious,
      ]);
    };

    Sum();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <Chart
          type="donut"
          width={1349}
          height={550}
          series={total}
          options={{
            labels: typeSick,
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      showAlways: true,
                      // formatter: () => "343",
                      fontSize: 30,
                      color: "#f90000",
                    },
                  },
                },
              },
            },

            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
});
export default Donutchart;
