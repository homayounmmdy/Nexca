import MapProps from '../components/MapTypes';
import MapWrapper from '../components/MapWrapper';
import useMapInteraction from '../hooks/useMapInteraction';
import React from 'react';

const AdMap = ({ setActiveProvinceId }: MapProps) => {
   const MapRef = useMapInteraction(setActiveProvinceId);

   return (
      <MapWrapper>
         <svg
            ref={MapRef}
            height="668.0000000000001"
            version="1.1"
            width="800"
            xmlns="http://www.w3.org/2000/svg"
            style={{
               overflow: 'hidden',
               position: 'relative',
               left: '-0.399994px',
               top: '0.600037px',
            }}
            viewBox="0 0 799.9999999999999 668"
            preserveAspectRatio="xMinYMin"
         >
            <rect
               x="-2000"
               y="-1670"
               width="5000"
               height="4175"
               r="0"
               rx="0"
               ry="0"
               fill="#ffffff"
               stroke="none"
               transform="matrix(0.8,0,0,0.8,0,0)"
               strokeWidth="1.2499999999999998"
               style={{
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                  opacity: 0,
                  fillOpacity: 0,
               }}
            />
            <path
               fill="#88a4bc"
               stroke="#ffffff"
               d="M425.4,421L457.5,418.5L476.3,428.7L483.90000000000003,459.4L517.8000000000001,477.29999999999995L557.4000000000001,469.59999999999997L610.2,474.7L640.3000000000001,490.09999999999997L672.4000000000001,518.1999999999999L680.5000000000001,560.1999999999999L672.9000000000001,563.9999999999999L663.7,574.7999999999998L636.2,667.4999999999999L555,701.8999999999999L466.8,713.3999999999999L459.3,671.5999999999999L455.6,635.8L472.5,605.0999999999999L446.2,599.9999999999999L404.7,605.0999999999999L357.59999999999997,612.8L323.59999999999997,600L280.29999999999995,589.8L300.99999999999994,577L331.19999999999993,559.1L351.8999999999999,523.3000000000001L366.99999999999994,495.20000000000005L380.19999999999993,477.30000000000007L408.49999999999994,449.20000000000005L425.3999999999999,421.00000000000006Z"
               className="sm_state provinceSec sm_state_AD08"
               opacity="1"
               strokeOpacity="1"
               strokeWidth="1.875"
               strokeLinejoin="round"
               transform="matrix(0.8,0,0,0.8,0,0)"
               id="province-8"
               data-testid="province-8"
               fillOpacity="1"
            />
            <path
               fill="#88a4bc"
               stroke="#ffffff"
               d="M423.5,336.6L463.1,331.5L498.90000000000003,331.5L547.9000000000001,331.5L608.3000000000001,318.7L661.1,311L710.1,311L745.9,295.6L755.3,326.3L764.6999999999999,369.8L791.0999999999999,382.6L815.5999999999999,398L832.8999999999999,414.9L816.4999999999999,456.7L807.2999999999998,542.5L783.1999999999998,571.1L754.8999999999999,584.4L724.2999999999998,584.6999999999999L694.0999999999998,573.6999999999999L687.5999999999998,563.0999999999999L680.4999999999998,560.1999999999999L672.3999999999997,518.1999999999999L640.2999999999997,490.0999999999999L610.1999999999997,474.69999999999993L557.3999999999997,469.5999999999999L517.7999999999997,477.2999999999999L483.89999999999975,459.3999999999999L476.2999999999997,428.69999999999993L457.4999999999997,418.49999999999994L425.3999999999997,420.99999999999994L425.3999999999997,372.3999999999999L423.4999999999997,336.5999999999999Z"
               className="sm_state provinceSec sm_state_AD03"
               opacity="1"
               strokeOpacity="1"
               strokeWidth="1.875"
               strokeLinejoin="round"
               transform="matrix(0.8,0,0,0.8,0,0)"
               id="province-3"
               data-testid="province-3"
               fillOpacity="1"
            />
            <path
               fill="#88a4bc"
               stroke="#ffffff"
               d="M423.5,336.6L429.2,295.6L446.2,262.3L472.5,236.70000000000002L506.5,226.50000000000003L532.9,216.30000000000004L532.9,185.50000000000003L529.3,132.50000000000003L557.0999999999999,145.60000000000002L845.3,174.10000000000002L823.3,244.00000000000003L864.1999999999999,270L923.0999999999999,288.3L944.3999999999999,319.40000000000003L954.4999999999999,334.1L890.8999999999999,340.1L844.4999999999999,385.20000000000005L832.8999999999999,414.90000000000003L815.5999999999999,398.00000000000006L791.0999999999999,382.6000000000001L764.6999999999999,369.80000000000007L755.3,326.30000000000007L745.9,295.6000000000001L710.1,311.00000000000006L661.1,311.00000000000006L608.3000000000001,318.70000000000005L547.9000000000001,331.50000000000006L498.9000000000001,331.50000000000006L463.1000000000001,331.50000000000006L423.50000000000006,336.6000000000001Z"
               className="sm_state provinceSec sm_state_AD02"
               opacity="1"
               strokeOpacity="1"
               strokeWidth="1.875"
               strokeLinejoin="round"
               transform="matrix(0.8,0,0,0.8,0,0)"
               id="province-2"
               data-testid="province-2"
               fillOpacity="1"
            />
            <path
               fill="#88a4bc"
               stroke="#ffffff"
               d="M250.1,490.1L289.7,467.1L327.4,441.5L363.2,433.8L393.4,421L425.4,421L408.5,449.2L380.2,477.3L367,495.2L351.9,523.3L331.2,559.0999999999999L301,576.9999999999999L280.3,589.7999999999998L265.2,574.4999999999999L255.79999999999998,541.1999999999999L253.89999999999998,520.8L250.09999999999997,490.09999999999997Z"
               className="sm_state provinceSec activeProvince sm_state_AD07"
               opacity="1"
               strokeOpacity="1"
               strokeWidth="1.875"
               strokeLinejoin="round"
               transform="matrix(0.8,0,0,0.8,0,0)"
               id="province-7"
               data-testid="province-7"
               fillOpacity="1"
            />
            <path
               fill="#88a4bc"
               stroke="#ffffff"
               d="M155.8,538.1L180.4,518.2L214.3,500.30000000000007L250.10000000000002,490.1000000000001L253.90000000000003,520.8000000000001L255.80000000000004,541.2L265.20000000000005,574.5L280.30000000000007,589.8L323.6000000000001,600L357.6000000000001,612.8L404.7000000000001,605.0999999999999L446.2000000000001,599.9999999999999L472.5000000000001,605.0999999999999L455.60000000000014,635.8L459.3000000000001,671.5999999999999L466.8000000000001,713.3999999999999L395.20000000000016,722.6999999999998L381.10000000000014,738.8999999999999L370.10000000000014,758.5999999999999L354.10000000000014,778.0999999999999L324.70000000000016,794.3L304.00000000000017,797.1999999999999L150.50000000000017,776.6999999999999L121.40000000000018,754.9999999999999L121.40000000000018,711.9999999999999L48.30000000000018,597.5999999999999L91.30000000000018,577.9999999999999L105.70000000000019,574.2999999999998L155.80000000000018,538.0999999999998Z"
               className="sm_state provinceSec sm_state_AD06"
               opacity="1"
               strokeOpacity="1"
               strokeWidth="1.875"
               strokeLinejoin="round"
               transform="matrix(0.8,0,0,0.8,0,0)"
               id="province-6"
               data-testid="province-6"
               fillOpacity="1"
            />
            <path
               fill="#88a4bc"
               stroke="#ffffff"
               d="M159.4,200.9L198.5,65.20000000000002L278.6,69.40000000000002L353,40.80000000000002L391.8,38.00000000000002L529.3,132.50000000000003L532.9,185.50000000000003L532.9,216.30000000000004L506.5,226.50000000000003L472.5,236.70000000000002L446.2,262.3L429.2,295.6L423.5,336.6L399,334L365.1,328.9L321.70000000000005,318.7L285.90000000000003,308.4L263.3,285.4L248.20000000000002,241.89999999999998L235.00000000000003,223.89999999999998L208.60000000000002,218.79999999999998L180.40000000000003,218.79999999999998L159.40000000000003,200.89999999999998Z"
               className="sm_state provinceSec sm_state_AD05"
               opacity="1"
               strokeOpacity="1"
               strokeWidth="1.875"
               strokeLinejoin="round"
               transform="matrix(0.8,0,0,0.8,0,0)"
               id="province-5"
               data-testid="province-5"
               fillOpacity="1"
            />
            <path
               fill="#88a4bc"
               stroke="#ffffff"
               d="M159.4,200.9L180.4,218.8L208.6,218.8L235,223.9L248.2,241.9L263.3,285.4L285.90000000000003,308.4L321.70000000000005,318.7L365.1,328.9L399,334L423.5,336.6L425.4,372.40000000000003L425.4,421.00000000000006L393.4,421.00000000000006L363.2,433.80000000000007L327.4,441.50000000000006L289.7,467.1000000000001L250.1,490.1000000000001L214.3,500.30000000000007L180.4,518.2L155.8,538.1L147.10000000000002,483.70000000000005L102.60000000000002,443.90000000000003L45.50000000000002,451.50000000000006L53.800000000000026,412.40000000000003L95.80000000000003,339.5L96.00000000000003,326.3L74.80000000000003,311.90000000000003L77.90000000000002,279.40000000000003L92.10000000000002,244.60000000000002L103.40000000000002,223.90000000000003L159.40000000000003,200.90000000000003Z"
               className="sm_state provinceSec sm_state_AD04"
               opacity="1"
               strokeOpacity="1"
               strokeWidth="1.875"
               strokeLinejoin="round"
               transform="matrix(0.8,0,0,0.8,0,0)"
               id="province-4"
               data-testid="province-4"
               fillOpacity="1"
            />
            <circle
               cx="0"
               cy="0"
               r="0"
               fill="none"
               stroke="#000"
               strokeWidth="0.9999999999999999"
            />
            <text
               x="551.2"
               y="219.20000000000002"
               textAnchor="middle"
               stroke="none"
               fill="#ffffff"
               strokeWidth="0"
               opacity="1"
               transform="matrix(0.8,0,0,0.8,110.24,43.84)"
               className="sm_label provinceName sm_label_AD02"
            >
               <tspan dy="5.599996757507341">Canillo</tspan>
            </text>
            <text
               x="502.40000000000003"
               y="352.40000000000003"
               textAnchor="middle"
               stroke="none"
               fill="#ffffff"
               strokeWidth="0"
               opacity="1"
               transform="matrix(0.8,0,0,0.8,100.48,70.48)"
               className="sm_label provinceName sm_label_AD03"
            >
               <tspan dy="5.599999809265171">Encamp</tspan>
            </text>
            <text
               x="188.4"
               y="295.6"
               textAnchor="middle"
               stroke="none"
               fill="#ffffff"
               strokeWidth="0"
               opacity="1"
               transform="matrix(0.8,0,0,0.8,37.68,59.12)"
               className="sm_label provinceName sm_label_AD04"
            >
               <tspan dy="5.5999876022339095">La Massana</tspan>
            </text>
            <text
               x="276.8"
               y="150"
               textAnchor="middle"
               stroke="none"
               fill="#ffffff"
               strokeWidth="0"
               opacity="1"
               transform="matrix(0.8,0,0,0.8,55.36,30)"
               className="sm_label provinceName sm_label_AD05"
            >
               <tspan dy="5.599993705749512">Ordino</tspan>
            </text>
            <text
               x="208.4"
               y="514.8000000000001"
               textAnchor="middle"
               stroke="none"
               fill="#ffffff"
               strokeWidth="0"
               opacity="1"
               transform="matrix(0.8,0,0,0.8,41.68,102.96)"
               className="sm_label provinceName sm_label_AD06"
            >
               <tspan dy="5.60000591278083">Sant Julià de Lòria</tspan>
            </text>
            <text
               x="270"
               y="404.40000000000003"
               textAnchor="middle"
               stroke="none"
               fill="#ffffff"
               strokeWidth="0"
               opacity="1"
               transform="matrix(0.8,0,0,0.8,54,80.88)"
               className="sm_label provinceName sm_label_AD07"
            >
               <tspan dy="5.599999809265171">Andorra la Vella</tspan>
            </text>
            <text
               x="384.40000000000003"
               y="452.8"
               textAnchor="middle"
               stroke="none"
               fill="#ffffff"
               strokeWidth="0"
               opacity="1"
               transform="matrix(0.8,0,0,0.8,76.88,90.56)"
               className="sm_label provinceName sm_label_AD08"
            >
               <tspan dy="5.600005912780773">Escaldes-Engordany</tspan>
            </text>
            <circle
               cx="0"
               cy="0"
               r="0"
               fill="none"
               stroke="#000"
               strokeWidth="0.9999999999999999"
            />
            <circle
               cx="0"
               cy="0"
               r="0"
               fill="none"
               stroke="#000"
               strokeWidth="0.9999999999999999"
            />
         </svg>
      </MapWrapper>
   );
};

export default AdMap;
