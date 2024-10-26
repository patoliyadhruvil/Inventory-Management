import React from 'react';
import Chart from 'react-apexcharts';
import { Button, ButtonGroup, Dropdown, Table } from 'react-bootstrap';
import { FiFileText, FiUserCheck } from 'react-icons/fi';
import { GoFile } from 'react-icons/go';
import { IoEllipsisVertical } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';

const PageWrapper = () => {

  const dashWidgetsData = [
    { amount: 4385, background: 'rgba(40, 199, 111, 0.12)', icon: 'dash1.svg' },
    { amount: 385656.5, background: 'rgba(40, 199, 111, 0.12)', icon: 'dash2.svg' },
    { amount: 307144, background: 'rgba(234, 84, 85, 0.12)', icon: 'dash3.svg' },
    { amount: 40000, background: 'rgba(40, 199, 111, 0.12)', icon: 'dash4.svg' },
  ];

  const dashCountsData = [
    { count: 100, backgroundColor: '', icon: <LuUser /> },
    { count: 100, backgroundColor: '#00CFE8', icon: <FiUserCheck /> },
    { count: 100, backgroundColor: '#1B2850', icon: <FiFileText /> },
    { count: 100, backgroundColor: '#28C76F', icon: <GoFile /> },
  ];
  
  

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    colors: ['#EA5455', '#28C76F'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
  };

  const chartSeries = [
    {
      name: 'Sales',
      data: [30, 40, 45, 50, 49, 60, 70, 60],
    },
    {
      name: 'Purchase',
      data: [10, 15, 20, 25, 30, 35, 40, 45],
    },
  ];

  return (
    <>
      <section>
        <div className="page-wrapper" style={{ minHeight: '476px' }}>
          <div className="content">
            <div className="row">
              {dashWidgetsData.map((widget, index) => (
                <div className="col-3" key={index}>
                  <div className="dash-widget d-flex">
                    <div className="dash-widgetimg" style={{ background: widget.background }}>
                      <img src={`https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/${widget.icon}`} alt="img" />
                    </div>
                    <div className="dash-widgetcontent">
                      <h5 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>
                        $<span>{widget.amount}</span>
                      </h5>
                      <h6>Total Purchase Due</h6>
                    </div>
                  </div>
                </div>
              ))}
              {dashCountsData.map((countData, index) => (
                <div className="col-3" key={index}>
                  <div className="dash-count d-flex justify-content-between" style={{ backgroundColor: countData.backgroundColor }}>
                    <div className="dash-counts">
                      <h4 style={{ fontWeight: '700' }}>{countData.count}</h4>
                      <h5 style={{ fontSize: '14px', fontWeight: 'normal' }}>Customers</h5>
                    </div>
                    <div className="dash-img">
                      {countData.icon}
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-7">
                <div className="card">
                  <div className="card-header pb-0 d-flex justify-content-between align-items-center" style={{ padding: '20px 20px 0px', background: 'transparent' }}>
                    <h5 style={{ fontSize: '18px', fontWeight: '700' }}>Purchase & Sales</h5>
                    <div className="graph-sets d-flex">
                      <ul className="d-flex">
                        <li>
                          <span>Sales</span>
                        </li>
                        <li>
                          <span>Purchase</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="sales-charts" style={{ minHeight: '315px' }}>
                      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="card">
                  <div className="card-header pb-0 d-flex justify-content-between align-items-center" style={{ padding: '20px 20px 0px', background: 'transparent' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '700' }}>Recently Added Products</h4>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" style={{ fontSize: "14px" }}>Product List</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" style={{ fontSize: "14px" }}>Product Add</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body" style={{ padding: "20px" }}>
                    <Table striped style={{ background: "#fff", minHeight: '345px' }}>
                      <thead>
                        <tr>
                          <th style={{ fontSize: '14px', fontWeight: "600" }}>Sno</th>
                          <th style={{ fontSize: '14px', fontWeight: "600" }}>Products</th>
                          <th style={{ fontSize: '14px', fontWeight: "600" }}>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>4</td>
                          <td className='Products-imges'>
                            <a href="#">
                              <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/x/o/8/-original-imagnvwtyv2panhd.jpeg?q=70" alt="img" />
                            </a>
                            <a href="#">
                              Titan
                            </a>
                          </td>
                          <td style={{ fontSize: "14px" }}>$291.01</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td className='Products-imges'>
                            <a href="#">
                              <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/k/o/e/-original-imagzkhfeyh5gzsh.jpeg?q=70" alt="img" />
                            </a>
                            <a href="#">
                              Sonata
                            </a>
                          </td>
                          <td style={{ fontSize: "14px" }}>$522.29</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td className='Products-imges'>
                            <a href="#">
                              <img src="https://rukminim2.flixcart.com/image/416/416/l5ld8y80/smartwatch/r/q/t/-original-imagg8dksgct9hxg.jpeg?q=70" alt="img" />
                            </a>
                            <a href="#">
                              Fireboult
                            </a>
                          </td>
                          <td style={{ fontSize: "14px" }}>$668.51</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className='Products-imges'>
                            <a href="#">
                              <img src="https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/smartwatch/0/t/2/-original-imagg3us6rfzxdgm.jpeg?q=70" alt="img" />
                            </a>
                            <a href="#">
                              Real Me
                            </a>
                          </td>
                          <td style={{ fontSize: "14px" }}>$891.2 </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="big-box pt-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 style={{ fontSize: "18px", fontWeight: "700", margin: "0px 0px 20px" }}>Expired Products</h4>
                      <Table responsive="sm" style={{ minHeight: "335px" }}>
                        <thead>
                          <tr>
                            <th style={{ fontSize: "14px", fontWeight: "600", color: "#212B36" }}>Sno</th>
                            <th style={{ fontSize: "14px", fontWeight: "600", color: "#212B36" }}>Product Code</th>
                            <th style={{ fontSize: "14px", fontWeight: "600", color: "#212B36" }}>Product Name</th>
                            <th style={{ fontSize: "14px", fontWeight: "600", color: "#212B36" }}>Brand Name</th>
                            <th style={{ fontSize: "14px", fontWeight: "600", color: "#212B36" }}>Category Name</th>
                            <th style={{ fontSize: "14px", fontWeight: "600", color: "#212B36" }}  >Expiry Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td style={{ fontSize: "14px" }}>IT0001</td>
                            <td className='Products-imges'>
                              <a href="#">
                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/product/product2.jpg" alt="img" />
                              </a>
                              <a href="#">
                                Orange
                              </a>
                            </td>
                            <td style={{ fontSize: "14px" }}>N/D</td>
                            <td style={{ fontSize: "14px" }}>Fruits</td>
                            <td style={{ fontSize: "14px" }}>12-12-2022</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td style={{ fontSize: "14px" }}>IT0002</td>
                            <td className='Products-imges'>
                              <a href="#">
                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/product/product3.jpg" alt="img" />
                              </a>
                              <a href="#">
                                Pineapple
                              </a>
                            </td>
                            <td style={{ fontSize: "14px" }}>N/D</td>
                            <td style={{ fontSize: "14px" }}>Fruits</td>
                            <td style={{ fontSize: "14px" }}>25-11-2022</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td style={{ fontSize: "14px" }}>IT0003</td>
                            <td className='Products-imges'>
                              <a href="#">
                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/product/product4.jpg" alt="img" />
                              </a>
                              <a href="#">
                                Stawberry
                              </a>
                            </td>
                            <td style={{ fontSize: "14px" }}>N/D</td>
                            <td style={{ fontSize: "14px" }}>Fruits</td>
                            <td style={{ fontSize: "14px" }}>19-11-2022</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td style={{ fontSize: "14px" }}>IT0004</td>
                            <td className='Products-imges'>
                              <a href="#">
                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/product/product5.jpg" alt="img" />
                              </a>
                              <a href="#">
                                Avocat
                              </a>
                            </td>
                            <td style={{ fontSize: "14px" }}>N/D</td>
                            <td style={{ fontSize: "14px" }}>Fruits</td>
                            <td style={{ fontSize: "14px" }}>20-11-2022</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageWrapper;
