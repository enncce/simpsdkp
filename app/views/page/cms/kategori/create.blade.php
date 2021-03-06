				{{Form::open(['route' => 'admin.cms.kategori.save', 'method' => 'post', 'id' => 'frm-add-kategori'])}}
				<h4>Tambahkan Kategori Baru</h4>
				<hr>
				<div class="form-group">
					<label>Nama Kategori : *</label>
					{{Form::text('nama_kategori', null, ['id' => 'nama_kategori', 'class' => 'form-control', 'required' => ''])}}
				</div>
				<div class="form-group">
					<label>Deskripsi Kategori : </label>
					{{Form::textarea('deskripsi_kategori', null, ['id' => 'deskripsi_kategori', 'class' => 'form-control', 'rows' => '4', 'style' => 'resize:none;'])}}
				</div>
				<div class="form-group">
					<label>UFL : </label><small class="pull-right">* Opsional</small>
					{{Form::text('ufl', null, ['id' => 'ufl', 'class' => 'form-control'])}}
					<small><i>Nama kategori yang akan ditampilkan pada url.</i></small>
				</div>
				<div class="form-group">
					<label>Kategori Induk : </label>
					{{Form::select('sub_kategori', Lib::listCMSKategoriUtama(), null, ['id' => 'sub_kategori', 'class' => 'form-control'])}}
				</div>
				<div class="form-group">
					<button class="btn green">Simpan Kategori</button>
				</div>
				{{Form::close()}}
				<script type="text/javascript">
				$('#frm-add-kategori').submit(function(event){
					event.preventDefault();

					$.post(
						$(this).prop('action'),
						{
							"nama_kategori"			: $('input[name=nama_kategori]').val(),	
							"deskripsi_kategori"	: $('textarea[name=deskripsi_kategori]').val(),
							"ufl"					: $('input[name=ufl]').val(),
							"sub_kategori"			: $('select[name=sub_kategori]').val()
						},
						function(data)
						{
							tbl_kategori.fnReloadAjax();
							alert(data.msg);
							$('#form-kategori').load("{{route('admin.cms.kategori.create')}}");
							$('#frm-add-kategori')[0].reset();
						},
						'json'
					);
				});
				</script>