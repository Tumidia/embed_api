function embed_post(id_post, reactions, id_comment, id_reply, width, height) {
	document.write('<iframe style="border: 2px solid #b1b1b1; border-radius: 5px;" src="https://www.th3arabe.ml/api/embed.php?post='+id_post+'&reactions='+reactions+'&source2='+id_comment+'&source3='+id_reply+'" height="'+height+'" width="'+width+'" ></iframe>');
}
