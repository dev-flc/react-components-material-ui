export let expansion = {
    root: {
      width: '100%',
      boxShadow : 'none',
      margin : '0px',
      '&:before' : { height: '0px' }
    }
  };

export let expansionSummary = {
    root: {
        padding : '0px',
        minHeight: '48px !important'
        //background : 'red'
    },
    expandIcon: {
        right: "-25px"
    },
    content: {
        margin: '0px !important',
        minHeight: '24px'
    }
  };

  export let expansionDetail = {
    root: {
        padding : '0px',
        display : 'contents'
    }
  };
