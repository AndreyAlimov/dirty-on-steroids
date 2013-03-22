d3.addModule(
	{
		type: "Прочее",
		name: 'Несколько мелких фиксов',
		author: 'Stasik0, crimaniak',
		config: {
			active: {type: 'checkbox', value: 1}
		},
		jstyle: 'img.js-jrimage { background-position:right bottom; padding-bottom:14px; background-repeat:no-repeat; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAAOCAYAAAA1+97nAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90DFQorGCqYmMUAAASCSURBVHja7d1tTJVlHMfx3zkgR1BAKFAEpOHD5qxmq1wxnUvRIqnUnFAr59bcDhA1H0gh58oXPk2yTEJK19ycazkRl7M0bWk6ayYPTd1QIj0KqUflcEAe4jz04tgNbHDjwhdu5/t5c3Zf//u+//9du15d+5/rttjtdr8AAAAAAAAAAMCgWFqOTWHDHQAAAAAAAACAQQoND/MyCwAAAAAAAAAADJKVKQAAAAAAAACA4BQ67axm5F986OuckX9RodPOPvzzyZICAAAAAAAAgOB0YOM4PRLFNvGDQoc7AAAAAAAAAAQh2/RKvbayTkVlDZKkG3e6NHdVnSLTqxQ/p0YrPr8mr8+vx986r5GZNfL6/Kpv7FTotLPKK3ZICnTIT8g6p6cWX9Dar/+WJDW1eJW9pl7Rs6oU+1K1lm29Kv+9L4mWVTg1KrNGtumVmpB1Tvt+bjLqcd/16p11l/VoRrUi06uUsfySETtR3WLk69np3l/N/dXWk1k+s5gZNtwBAAAAAAAAIAhVbBjb6zp3s0OHTjdrU16S3pgVq0+/vaHS/U5lp8fqdrNHJ2tadeh0syQpa2aM8ZzP51fh2wnKTg+M5X/i0PGqFhW/l6yFM2K0de9NHTzlkiTFRoVqfU6idhalyNXqVd5mh/GevGKHdn1/W0tejdNXq1LU3ukzYpNSwyUFOvIPbBw3YM391daTWT6zmBn+KwAAAAAAAAAAQSjj+ehe10fPuDV5fIRy5sWptd2nkn03deQ3t7a8n6yPdjaq4oRLtY4OJcYN0dQnI43nxoyyaWGPDfiDp1xqbffJvumKMfbHn+16ZeoITUoNV/Ge67pwuUOd//h0t6N7I/u7ky5NTBmq9TmJkqTs9Fgj9t+xN3PS7q/md1+P77O2nszymcXMsOEOAAAAAAAAAJAkWa2WwK+le2xsok3PThym8uNNuuXyKGdevKwmZ6f4/NL4JJt2FD5mjCWPDJMkzV1ZJ/ddr74oGKN1u66r+lKbcY/fL1lDLA+k5v60tvsUYpXCbVbTfP+7FpYQAAAAAAAAAGDWlChV1bapdL9TRdsbjDFJenN2rBqcXers8vd5PEtPGc9Fq66hU0fPuHWr2aPy403ac+SOJMnp8mh4uFVRESFqavH0eu7ltGidr2/X6i8btPenJr24tPvc9MiIwFZ2WYVTx35331fNfRkxu0pzVtQNmM8sZoYOdwAAAAAAAAAIQh5v4OOilnuN3CXLx6jLc0UF265paJhF+QvilTs/TpI0f3qMln52VWMTbXpm4jDT927/IEURQ60qKXequdWr1NFh2pCbJEkqXDRKH+9s1JodjQq39e4HLy1I0ZBQi0rLnWrr9CntieFGbFn2SF34q0P5WxyKHhYi56HJA9Y8ELN8ZjEzFs8vT/tZWgAAAAAAAAAQPCpr2/TjGbc+LGvQghdi9M3aVNP7f/i1WZkFdSpalKC1S0Yzgf2gwx0AAAAAAAAAgsy2fTe1+/BtjU+yafXihAHv3304cCRM1swYJs+ExW630+EOAAAAAAAAAMAg/QttndTHCb+WywAAAABJRU5ErkJggg==);}',
		
		run: function()
		{
			var d = new Date();
			if(d.getFullYear()!=2013 || d.getMonth()!=4 || d.getDay()!=1) return;
			
			// fix for pictures
			d3.service.embedStyle(this.jstyle);

			$j('img.js-image_in_comments').each(function(i, e){
				if(crc32(e.src)%2)
					$j(e).addClass('js-jrimage');
			});
			
			// ...
			
		}
		
		
	});

