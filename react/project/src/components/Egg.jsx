import React from 'react';

const Egg = ({onClick}) => {

    return (
        <div className="flex flex-col gap-1 justify-center items-center">
                <div className="w-16 h-16">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e4244847-81f6-4cbb-a5d8-09bcebe86314/d8fgqtx-b4f04c6d-ed8b-45d6-ab35-31c3c797d7b3.png/v1/fill/w_667,h_657/the_eragon_world_pre_reg_gift_a_dragon_egg_by_forbidden_hanyou_d8fgqtx-fullview.png" alt=""/>
                </div>
                <button
                    onClick={onClick}
                    className="bg-white text-indigo-500 px-2 rounded hover:bg-indigo-500 hover:text-white">sell</button>

        </div>
    );
};

export default Egg;
