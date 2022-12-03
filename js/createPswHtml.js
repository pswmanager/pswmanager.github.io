function renderPsw(id, platform, username, password){
    return `
    <div class="container p-2 col-lg-4">
        <div class="card">
            <div class="card-header bg-white">
                <div class="float-right">
                    <button class="btn btn-outline-white" onclick="remove_password(${id})">
                        <img src="/frontend/images/trash.svg"/>
                    </button>
                    <button class="btn btn-outline-white" type="button" id="button-view-${id}" onclick="pswVisibility(${id})">
                        <img src="/frontend/images/eye.svg" id="eye-${id}"/>
                    </button>
                    <button class="btn btn-outline-white" type="button" id="button-edit-${id}" onclick="update_password(${id})">
                        <img src="/frontend/images/pencil-fill.svg"/>
                    </button>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title"><img src="/frontend/images/app-icon.svg" width="75px"/>${platform}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Nome utente: ${username}</h6>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" aria-describedby="button-edit-${id}" value="${password}" id="input-${id}">
                </div>
            </div>
        </div>
    </div>
`;
}