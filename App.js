





// const heading = React.createElement("h1", {id:'heading'}, "This text from react")

// const root = ReactDOM.createRoot(document.getElementById('root'))

//       root.render(heading)

//       console.log('heading',heading);


      /*
      <div id='parent'>

          <div id='child-1'>
          <h1> </h1>
          <h2> </h2>
          </div>

          <div id='child-2'>
          <h1> </h1>
          <h2> </h2>
          </div>

      </div>
      */

      const heading = React.createElement(
        'div',
        { id: 'parent' },

        [
          React.createElement('div', { id: 'child-1' }, [
            React.createElement('h1', {}, 'This h1 from nested div'),
            React.createElement('h2', {}, 'This h2 from nested div'),
          ]),
          React.createElement('div', { id: 'child-2' }, [
            React.createElement('h1', {}, 'This h1 from nested div'),
            React.createElement('h2', {}, 'This h2 from nested div'),
          ]),
        ]
      );

      const root = ReactDOM.createRoot(document.getElementById('root'));

      root.render(heading);

      console.log('heading', heading);