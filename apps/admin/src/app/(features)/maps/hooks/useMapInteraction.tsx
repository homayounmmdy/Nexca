import { useEffect, useRef } from 'react';

/**
 * A custom hook that manages interactive behavior for an SVG map of provinces.
 * It attaches click event listeners to province elements within an SVG map,
 * updates the active province state, and visually highlights the clicked province.
 *
 * @param {function} setActiveProvinceId - A state setter function that accepts a province ID (string)
 *                                          and updates the currently active province in the parent component.
 * @returns {React.RefObject<SVGSVGElement>} A ref object that should be attached to the root SVG element
 *                                           of the map in the JSX. This allows the hook to access and
 *                                           manage the SVG's child province elements.
 *
 * @example
 * const mapRef = useMapInteraction(setActiveProvinceId);
 *
 * // In JSX:
 * <svg ref={mapRef} ... >
 *   <g className="provinceSec" id="province-CA">...</g>
 *   ...
 * </svg>
 *
 * @remarks
 * - Province elements must have the class name `provinceSec` and an `id` attribute
 *   formatted as `province-{ID}` (e.g., `province-ON`), where `{ID}` is the province identifier.
 * - Clicking a province triggers `setActiveProvinceId` with the extracted ID (e.g., `"ON"`).
 * - The hook automatically removes the `activeProvince` class from all provinces
 *   and adds it to the clicked one for visual feedback.
 * - Event listeners are cleaned up on unmount to prevent memory leaks.
 */

const useMapInteraction = (
   setActiveProvinceId: (id: string) => void
): React.RefObject<SVGSVGElement> => {
   const mapRef = useRef<SVGSVGElement>(null);

   useEffect(() => {
      const mapElement = mapRef.current;
      if (!mapElement) return;

      const allProvinces = mapElement.querySelectorAll('.provinceSec');

      const handleClick = (e: Event) => {
         e.stopPropagation();
         const clickedProvince = e.target as SVGAElement;
         const provinceID = clickedProvince.id.slice(9);
         setActiveProvinceId(provinceID);

         allProvinces.forEach((province: any) => {
            province.classList.remove('activeProvince');
         });
         clickedProvince.classList.add('activeProvince');
      };

      allProvinces.forEach((province: any) => {
         province.addEventListener('click', handleClick);
      });

      return () => {
         allProvinces.forEach((province: any) => {
            province.removeEventListener('click', () => {});
         });
      };
   }, [setActiveProvinceId]);

   return mapRef;
};

export default useMapInteraction;
