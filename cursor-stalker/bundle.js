(function (React, ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const width = 960;
  const height = 500;
  const circleRadius = 40;
  const initialMousePosition = { x:width/2, y: height /2};





  const App = () => {
   
    const [mousePosition, setMousePosition] = React.useState(initialMousePosition);
    const handleMouseMove = React.useCallback(e => {
    const { clientX, clientY } = e;
   setMousePosition({ x: clientX, y: clientY }); 
  }, [setMousePosition] ); 

    
    return (
        	React__default.createElement( 'svg', { fill: "turquoise", width: width, height: height, onMouseMove: handleMouseMove },

        React__default.createElement( 'circle', {
          cx: mousePosition.x, cy: mousePosition.y, r: circleRadius })

   		 )
      
  )
                    };
  const rootElement = document.getElementById('root');
  ReactDOM.render(React__default.createElement( App, null ), rootElement);

}(React, ReactDOM));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHdpZHRoID0gOTYwXG5jb25zdCBoZWlnaHQgPSA1MDBcbmNvbnN0IGNpcmNsZVJhZGl1cyA9IDQwXG5jb25zdCBpbml0aWFsTW91c2VQb3NpdGlvbiA9IHsgeDp3aWR0aC8yLCB5OiBoZWlnaHQgLzJ9XG5cblxuXG5cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuIFxuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZShpbml0aWFsTW91c2VQb3NpdGlvbilcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soZSA9PiB7XG4gIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZVxuIHNldE1vdXNlUG9zaXRpb24oeyB4OiBjbGllbnRYLCB5OiBjbGllbnRZIH0pIFxufSwgW3NldE1vdXNlUG9zaXRpb25dICkgXG5cbiAgXG4gIHJldHVybiAoXG4gICAgICBcdDxzdmcgZmlsbD1cInR1cnF1b2lzZVwiIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9PlxuXG4gICAgICA8Y2lyY2xlXG4gICAgICAgIGN4PXttb3VzZVBvc2l0aW9uLnh9XG4gICAgICAgIGN5PXttb3VzZVBvc2l0aW9uLnl9XG4gICAgICAgIHI9e2NpcmNsZVJhZGl1c31cbiAgICAgIC8+XG5cbiBcdFx0IDwvc3ZnPlxuICAgIFxuKVxuICAgICAgICAgICAgICAgICAgfVxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBR0EsTUFBTSxLQUFLLEdBQUcsSUFBRztFQUNqQixNQUFNLE1BQU0sR0FBRyxJQUFHO0VBQ2xCLE1BQU0sWUFBWSxHQUFHLEdBQUU7RUFDdkIsTUFBTSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQSxNQUFNLEdBQUcsR0FBRyxNQUFNO0VBQ2xCO0VBQ0EsRUFBRSxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUdBLGNBQVEsQ0FBQyxvQkFBb0IsRUFBQztFQUMxRSxFQUFFLE1BQU0sZUFBZSxHQUFHQyxpQkFBVyxDQUFDLENBQUMsSUFBSTtFQUMzQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBQztFQUNoQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUM7RUFDN0MsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRTtBQUN2QjtFQUNBO0VBQ0EsRUFBRTtFQUNGLE9BQU9DLHVDQUFLLE1BQUssV0FBVyxFQUFDLE9BQU8sS0FBTSxFQUFDLFFBQVEsTUFBTyxFQUFDLGFBQWE7QUFDeEU7RUFDQSxNQUFNQTtFQUNOLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBRSxFQUNwQixJQUFJLGFBQWEsQ0FBQyxDQUFFLEVBQ3BCLEdBQUcsY0FBYSxDQUNoQjtBQUNSO0VBQ0EsS0FBVTtFQUNWO0VBQ0EsQ0FBQztFQUNELG9CQUFtQjtFQUNuQixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBQztFQUNuRCxRQUFRLENBQUMsTUFBTSxDQUFDQSw4QkFBQyxTQUFHLEVBQUcsRUFBRSxXQUFXOzs7OyJ9