const PostCard = () => {
  return (
    <div>
      <div class='parent'>
        <div class='div1'>
          <img src='' alt='' />{' '}
        </div>
        <div class='div2'> </div>
        <div class='div3'> </div>
        <div class='div4'> </div>
        <div class='div5'> </div>
      </div>
    </div>
  );
};

export default PostCard;
/***
 * .parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 6 / 5; }
.div2 { grid-area: 1 / 1 / 3 / 5; }
.div3 { grid-area: 3 / 1 / 4 / 5; }
.div4 { grid-area: 4 / 1 / 5 / 5; }
.div5 { grid-area: 5 / 1 / 6 / 5; }
 */
